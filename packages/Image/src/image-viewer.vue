<template>
  <transition name="view-fade">
    <div ref="wrapper" tabindex="-1" class="rol-image-viewer__wrapper" :style="{ 'z-index': zIndex }">
      <div class="rol-image-viewer__mask">
        <!-- far fa-times-circle -->
        <!-- <Icon :name="['far', 'times-circle']" /> -->
      </div>
      <span class="rol-image-viewer__btn rol-image-viewer__close" @click="hide">
        <Icon :name="['far', 'times-circle']" />
      </span>
      <span class="rol-image-viewer__btn rol-image-viewer__prev" @click="prev">
        <Icon name="chevron-left" />
      </span>
      <span class="rol-image-viewer__btn rol-image-viewer__next" @click="next">
        <Icon name="chevron-right" />
      </span>
      <div class="rol-image-viewer__btn rol-image-viewer__actions">
        <div class="rol-image-viewer__actions__inner">
          <Icon name="search-minus" @click.stop="handleActions('zoomOut')" />
          <Icon name="search-plus" @click.stop="handleActions('zoomIn')" />
          <i class="rol-image-viewer__actions__divider"></i>
          <Icon :name="mode.icon" @click.stop="toggleMode" />
          <i class="rol-image-viewer__actions__divider"></i>
          <Icon name="undo" @click.stop="handleActions('anticlocelise')" />
          <Icon name="redo" @click.stop="handleActions('clocelise')" />
        </div>
      </div>
      <div class="rol-image-viewer__canvas">
        <img
          v-for="(url, i) in urlList"
          v-show="i === index"
          :key="url"
          ref="img"
          :src="currentImg"
          :style="imgStyle"
          @load="handleImgLoad"
          @error="handleImgError"
          @mousedown="handleMouseDown"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Icon from '@rol-ui/icon'
import { computed, nextTick, onMounted, PropType, reactive, ref, watch } from 'vue'
import { rafThrottle } from '@rol-ui/utils/util'
import { EVENT_CODE } from '@rol-ui/utils/aria'
import { off, on } from '@rol-ui/utils/dom'
import { isFirefox } from '@rol-ui/utils/is$'

const Mode = {
  CONTAIN: {
    name: 'contain',
    icon: 'expand',
  },
  ORIGINAL: {
    name: 'original',
    icon: 'compress',
  },
}

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel'

export default {
  name: 'RolImageViewer',
  components: {
    Icon,
  },
  props: {
    urlList: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    onSwitch: {
      type: Function,
      default: () => ({}),
    },
    onClose: {
      type: Function,
      default: () => ({}),
    },
  },
  setup(props) {
    const loading = ref(true)
    const infinite = ref(true)
    const index = ref(props.initialIndex)
    const img = ref<HTMLImageElement | null>(null)
    const wrapper = ref<HTMLDivElement | null>(null)
    const mode = ref(Mode.CONTAIN)
    let transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false,
    })

    let _keyDownHandler = null
    let _mouseWheelHandler = null
    let _dragHandler = null

    const isSingle = computed(() => {
      return props.urlList.length <= 1
    })

    const isFirst = computed(() => {
      return index.value === 0
    })
    const isLast = computed(() => {
      return index.value === props.urlList.length - 1
    })
    const currentImg = computed(() => {
      return props.urlList[index.value]
    })

    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value

      const style: {
        transform: string
        transition: string
        'margin-left': string
        'margin-top': string
        'max-width'?: string
        'max-height'?: string
      } = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        'margin-left': `${offsetX}px`,
        'margin-top': `${offsetY}px`,
      }
      if (mode.value.name === Mode.CONTAIN.name) {
        style['max-width'] = style['max-height'] = '100%'
      }
      return style
    })

    const hide = () => {
      deviceSupportUninstall()
      props.onClose()
    }

    const handleImgLoad = () => {
      loading.value = false
    }

    const handleImgError = e => {
      loading.value = false
      e.target.alt = '加载失败'
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (loading.value || e.button !== 0) return
      const { offsetX, offsetY } = transform.value
      const startX = e.pageX
      const startY = e.pageY
      _dragHandler = rafThrottle(ev => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY,
        }
      })
      on(document, 'mousemove', _dragHandler)
      on(document, 'mouseup', () => {
        off(document, 'mousemove', _dragHandler)
      })

      e.preventDefault()
    }

    const toggleMode = () => {
      if (loading.value) return
      const modeNames = Object.keys(Mode)
      const modeValues = Object.values(Mode)
      const currentMode = mode.value.name
      const index = modeValues.findIndex(i => i.name === currentMode)
      const nextIndex = (index + 1) % modeNames.length
      mode.value = Mode[modeNames[nextIndex]]
      reset()
    }

    const prev = () => {
      if (isFirst.value && !infinite.value) return
      const len = props.urlList.length
      index.value = (index.value - 1 + len) % len
    }

    const next = () => {
      if (isLast.value && !infinite.value) return
      const len = props.urlList.length
      index.value = (index.value + 1) % len
    }

    const handleActions = (action, options = {}) => {
      if (loading.value) return
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      }

      switch (action) {
        case 'zoomOut':
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale - zoomRate).toFixed(3))
          }
          break
        case 'zoomIn':
          transform.value.scale = parseFloat((transform.value.scale + zoomRate).toFixed(3))
          break
        case 'clocelise':
          transform.value.deg += rotateDeg
          break
        case 'anticlocelise':
          transform.value.deg -= rotateDeg
          break
      }

      transform.value.enableTransition = enableTransition
    }

    const reset = () => {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      }
    }

    const deviceSupportInstall = () => {
      _keyDownHandler = rafThrottle(e => {
        switch (e.code) {
          case EVENT_CODE.esc:
            hide()
            break
          case EVENT_CODE.space:
            toggleMode()
            break
          // LEFT_ARROW
          case EVENT_CODE.left:
            prev()
            break
          case EVENT_CODE.up:
            handleActions('zoomIn')
            break
          // RIGHT_ARROW
          case EVENT_CODE.right:
            next()
            break
          // DOWN_ARROW
          case EVENT_CODE.down:
            handleActions('zoomOut')
            break
        }
      })

      _mouseWheelHandler = rafThrottle(e => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail
        if (delta > 0) {
          handleActions('zoomIn', {
            zoomRate: 0.015,
            enableTransition: false,
          })
        } else {
          handleActions('zoomOut', {
            zoomRate: 0.015,
            enableTransition: false,
          })
        }
      })
      on(document, 'keydown', _keyDownHandler)
      on(document, mousewheelEventName, _mouseWheelHandler)
    }

    const deviceSupportUninstall = () => {
      off(document, 'keydown', _keyDownHandler)
      off(document, mousewheelEventName, _mouseWheelHandler)
      _keyDownHandler = null
      _mouseWheelHandler = null
    }

    watch(index, () => {
      reset()
    })

    watch(currentImg, () => {
      nextTick(() => {
        const $img = img.value
        if (!$img.complete) {
          loading.value = true
        }
      })
    })

    onMounted(() => {
      deviceSupportInstall()
      wrapper.value?.focus()
    })

    return {
      index,
      hide,
      handleImgLoad,
      handleImgError,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      prev,
      next,
      imgStyle,
      handleActions,
      mode,
      img,
      wrapper,
      toggleMode,
      handleMouseDown,
      transform,
    }
  },
}
</script>

