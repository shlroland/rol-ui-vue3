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
          <Icon :name="mode.icon" />
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
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Icon from '@rol-ui/icon'
import { computed, PropType, reactive, ref } from 'vue'

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
    const mode = ref(Mode.CONTAIN)
    let transform = reactive({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false,
    })

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
      const { scale, deg, offsetX, offsetY, enableTransition } = transform
      console.log(transform)
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
      props.onClose()
    }

    const handleImgLoad = () => {
      loading.value = false
    }

    const handleImgError = e => {
      loading.value = false
      e.target.alt = '加载失败'
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
          if (transform.scale > 0.2) {
            transform.scale = parseFloat((transform.scale - zoomRate).toFixed(3))
          }
          break
        case 'zoomIn':
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3))
          break
        case 'clocelise':
          transform.deg += rotateDeg
          break
        case 'anticlocelise':
          transform.deg -= rotateDeg
          break
      }

      transform.enableTransition = enableTransition
    }

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
    }
  },
}
</script>

<style></style>
