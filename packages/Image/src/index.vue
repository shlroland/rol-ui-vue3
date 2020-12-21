<template>
  <div ref="container" :class="['rol-image', $attrs.class]" :style="$attrs.style">
    <slot v-if="loading" name="placeholder">
      <div class="rol-image__placeholder"></div>
    </slot>
    <slot v-else-if="hasLoadError" name="error">
      <div class="rol-image__error">加载失败</div>
    </slot>
    <img
      v-else
      class="rol-image__inner"
      v-bind="attrs"
      :src="src"
      :style="imageStyle"
      :class="{ 'rol-image__inner--center': alignCenter, 'rol-image__preview': preview }"
      @click="clickHandler"
    />
  </div>
  <template v-if="preview">
    <image-viewer
      v-if="showViewer"
      :z-index="zIndex"
      :initial-index="imageIndex"
      :on-close="closeViewer"
      :url-list="previewSrcList"
    />
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, ref, watch } from 'vue'
import { isString } from '@vue/shared'
import { useAttrs } from '@rol-ui/hooks'
import { isHtmlEle, isServer, isSupportObjectFit } from '@rol-ui/utils/is$'
import { getScrollContainer, isInContainer, off, on } from '@rol-ui/utils/dom'
import throttle from 'lodash/throttle'
import ImageViewer from './image-viewer.vue'

enum ObjectFit {
  NONE = 'none',
  CONTAIN = 'contain',
  COVER = 'cover',
  FILL = 'fill',
  SCALE_DOWN = 'scale-down',
  EMPTY = '',
}
let prevOverflow = ''
export default defineComponent({
  name: 'RolImage',
  components: {
    ImageViewer,
  },
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: '',
    },
    fit: {
      type: String as PropType<ObjectFit>,
      default: ObjectFit.EMPTY,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    scrollContainer: {
      type: [String, Object],
      default: null,
    },
    previewSrcList: {
      type: Array,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
  },
  emits: ['error'],
  setup(props, { emit }) {
    const attrs = useAttrs()
    const hasLoadError = ref(false)
    const loading = ref(true)
    const imgWidth = ref(0)
    const imgHeight = ref(0)
    const container = ref<HTMLElement | null>(null)
    const show = ref(props.lazy)
    const showViewer = ref(false)

    let _scrollContainer = null
    let _lazyLoadHandler = null

    const getImageStyle = (fit: string) => {
      const imageWidth = imgWidth.value
      const imageHeight = imgHeight.value

      if (!container.value) return {}
      const { clientWidth: containerWidth, clientHeight: containerHeight } = container.value
      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {}

      const vertical = imageWidth / imageHeight < 1

      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN
      }

      switch (fit) {
        case ObjectFit.NONE:
          return { width: 'auto', height: 'auto' }
        case ObjectFit.CONTAIN:
          return vertical ? { width: 'auto' } : { height: 'auto' }
        case ObjectFit.COVER:
          return vertical ? { height: 'auto' } : { width: 'auto' }
        default:
          return {}
      }
    }

    const imageStyle = computed(() => {
      const { fit } = props
      if (!isServer && fit) {
        return isSupportObjectFit() ? { 'object-fit': fit } : getImageStyle(fit)
      }
      return {}
    })

    const alignCenter = computed(() => {
      const { fit } = props
      return !isServer && !isSupportObjectFit() && fit !== ObjectFit.FILL
    })

    const preview = computed(() => {
      const { previewSrcList } = props
      return Array.isArray(previewSrcList) && previewSrcList.length > 0
    })

    const imageIndex = computed(() => {
      const { src, previewSrcList } = props
      let previewIndex = 0
      const srcIndex = previewSrcList.indexOf(src)
      if (srcIndex >= 0) {
        previewIndex = srcIndex
      }
      return previewIndex
    })

    const handleLoad = (e: Event, img: HTMLImageElement) => {
      imgWidth.value = img.width
      imgHeight.value = img.height
      loading.value = false
      hasLoadError.value = false
    }

    function handleError(e: Event) {
      loading.value = false
      hasLoadError.value = true
      emit('error', e)
    }

    const loadImage = () => {
      if (isServer) return

      const attributes = attrs.value
      loading.value = true
      hasLoadError.value = false

      const img = new Image()
      img.onload = e => handleLoad(e, img)
      img.onerror = handleError
      Object.keys(attributes).forEach(key => {
        const value = attributes[key]
        img.setAttribute(key, value)
      })
      img.src = props.src
    }

    const removeLazyLoadListener = () => {
      if (isServer || !_scrollContainer || !_lazyLoadHandler) return
      off(_scrollContainer, 'scroll', _lazyLoadHandler)
      _scrollContainer = null
      _lazyLoadHandler = null
    }

    const handleLazyLoad = () => {
      if (isInContainer(container.value, _scrollContainer)) {
        loadImage()
        removeLazyLoadListener()
      }
    }

    const addLazyLoadListener = () => {
      if (isServer) return
      const { scrollContainer } = props
      if (isHtmlEle(scrollContainer)) {
        _scrollContainer = scrollContainer
      } else if (isString(scrollContainer) && scrollContainer !== '') {
        _scrollContainer = document.querySelector(scrollContainer)
      } else {
        _scrollContainer = getScrollContainer(container.value)
      }
      if (_scrollContainer) {
        _lazyLoadHandler = throttle(handleLazyLoad, 200)
        on(_scrollContainer, 'scroll', _lazyLoadHandler)
        setTimeout(() => handleLazyLoad(), 100)
      }
    }

    watch(
      () => props.src,
      () => {
        show.value && loadImage()
      },
    )

    onMounted(() => {
      if (props.lazy) {
        setTimeout(() => addLazyLoadListener(), 0)
      } else {
        loadImage()
      }
    })

    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener()
    })

    const clickHandler = () => {
      if (!preview.value) return

      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      showViewer.value = true
    }

    const closeViewer = () => {
      document.body.style.overflow = prevOverflow
      showViewer.value = false
    }
    return {
      container,
      imageStyle,
      alignCenter,
      preview,
      imageIndex,
      clickHandler,
      loading,
      hasLoadError,
      imgWidth,
      imgHeight,
      attrs,
      showViewer,
      closeViewer,
    }
  },
})
</script>

<style></style>
