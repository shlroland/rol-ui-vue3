<template>
  <div class="rol-scrollbar">
    <div
      ref="wrap"
      :class="[wrapClass, 'rol-scrollbar__wrap', native ? '' : gutter ? '' : 'rol-scrollbar__wrap--hidden-default']"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['rol-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :size="sizeWidth" />
      <bar vertical :move="moveY" :size="sizeHeight" />
    </template>
  </div>
</template>

<script lang="ts">
import { addResizeListener, removeResizeListener } from '@rol-ui/utils/resize-event'
import scrollbarWidth from '@rol-ui/utils/scrollbar-width'
import { toObject } from '@rol-ui/utils/util'
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, PropType, provide, ref } from 'vue'
import Bar from './bar'

export default defineComponent({
  name: 'RolScrollBar',
  components: { Bar },
  props: {
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    tag: {
      type: String,
      default: 'div',
    },
    noresize: Boolean,
  },
  setup(props) {
    const wrap = ref(null)
    const resize = ref(null)
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    provide('scroll-bar-wrap', wrap)

    const handleScroll = () => {
      if (!props.native) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
      }
    }

    const update = () => {
      if (!wrap.value) return
      const heightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const widthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    onMounted(() => {
      if (props.native) return
      nextTick(update)
      !props.noresize && addResizeListener(resize.value, update)
    })

    const gutter = computed(() => {
      return scrollbarWidth()
    })
    onBeforeUnmount(() => {
      if (props.native) return
      !props.noresize && removeResizeListener(resize.value, update)
    })
    const style = computed(() => {
      const gutter = scrollbarWidth()
      let styleObj:any = props.wrapStyle
      if (gutter) {
        const gutterWith = `-${gutter}px`
        const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`
        if (Array.isArray(props.wrapStyle)) {
          styleObj = toObject(props.wrapStyle)
          styleObj.marginRight = styleObj.marginBottom = gutterWith
        } else if (typeof props.wrapStyle === 'string') {
          styleObj = props.wrapStyle
          styleObj += gutterStyle
        } else {
          styleObj = gutterStyle
        }
      }

      return styleObj
    })

    return {
      gutter,
      style,
      wrap,
      resize,
      moveX,
      moveY,
      handleScroll,
      sizeWidth,
      sizeHeight,
    }
  },
})
</script>

<style></style>
