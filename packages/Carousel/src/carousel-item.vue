<template>
  <div
    v-show="data.ready"
    class="rol-carousel__item"
    :class="{
      'is-active': data.active,
      'rol-carousel__item--card': type === 'card',
      'is-in-stage': data.inStage,
      'is-hover': data.hover,
      'is-animating': data.animating,
    }"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div class="rol-carousel__mask"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { autoprefixer, PartialCSSStyleDeclaration } from '@rol-ui/utils/util'
import { computed, defineComponent, getCurrentInstance, inject, onMounted, reactive, toRefs } from 'vue'
import { InjectCarouselScope } from './carousel.vue'

export interface RCarouselItemProps {
  name: string
  label: string | number
  key: string
}

export interface RCarouselItemData {
  hover: boolean
  translate: number
  scale: number
  active: boolean
  ready: boolean
  inStage: boolean
  animating: boolean
}

const CARD_SCALE = 0.83

export default defineComponent({
  name: 'RolCarouselItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props: RCarouselItemProps) {
    const instance = getCurrentInstance()

    const data = reactive({
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false,
    })

    const injectCarouselScope: InjectCarouselScope = inject('injectCarouselScope')

    const parentDirection = computed(() => {
      return injectCarouselScope.direction
    })

    const itemStyle = computed(() => {
      const translateType = parentDirection.value === 'vertical' ? 'translateY' : 'translateX'
      const value = `${translateType}(${data.translate}px) scale(${data.scale})`
      const style: PartialCSSStyleDeclaration = {
        transform: value,
      }
      return autoprefixer(style)
    })

    const processIndex = (index: number, activeIndex: number, length: number) => {
      if (activeIndex === 0 && index === length - 1) {
        return -1
      } else if (activeIndex === length - 1 && index === 0) {
        return length
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2
      }
      return index
    }

    const calcCardTranslate = (index: number, activeIndex: number) => {
      const parentWidth = injectCarouselScope.offsetWidth.value
      if (data.inStage) {
        return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
      } else if (index < activeIndex) {
        return (-(1 + CARD_SCALE) * parentWidth) / 4
      } else {
        return ((3 + CARD_SCALE) * parentWidth) / 4
      }
    }

    const calcTranslate = (index: number, activeIndex: number, isVertical: boolean) => {
      const distance = injectCarouselScope[isVertical ? 'offsetHeight' : 'offsetWidth'].value
      return distance * (index - activeIndex)
    }

    const translateItem = (index: number, activeIndex: number, oldIndex: number) => {
      const parentType = injectCarouselScope.type
      const length = injectCarouselScope.items.value.length
      if (parentType !== 'card' && oldIndex !== undefined) {
        data.animating = index === activeIndex || index === oldIndex
      }
      if (index !== activeIndex && length > 2 && injectCarouselScope.loop) {
        index = processIndex(index, activeIndex, length)
      }
      if (parentType === 'card') {
        if (parentDirection.value === 'vertical') {
          console.warn('vertical direction is not supported in card mode')
        }
        data.inStage = Math.round(Math.abs(index - activeIndex)) <= 1
        data.active = index === activeIndex
        data.translate = calcCardTranslate(index, activeIndex)
        data.scale = data.active ? 1 : CARD_SCALE
      } else {
        data.active = index === activeIndex
        const isVertical = parentDirection.value === 'vertical'
        data.translate = calcTranslate(index, activeIndex, isVertical)
      }
      data.ready = true
    }

    const handleItemClick = () => {
      if (injectCarouselScope && injectCarouselScope.type === 'card') {
        const index = injectCarouselScope.items.value.map(d => d.uid).indexOf(instance.uid)
        injectCarouselScope.setActiveItem(index)
      }
    }

    onMounted(() => {
      if (injectCarouselScope.updateItems) {
        injectCarouselScope.updateItems({
          uid: instance.uid,
          ...props,
          ...toRefs(data),
          translateItem,
        })
      }
    })

    return {
      data,
      itemStyle,
      translateItem,
      type: injectCarouselScope.type,
      handleItemClick,
    }
  },
})
</script>

<style></style>
