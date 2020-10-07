<template>
  <div ref="root" :class="carouselClasses">
    <div class="rol-carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button type="button" class="rol-carousel__arrow rol-carousel__arrow--left">
          <Icon name="chevron-left" />
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button type="button" class="rol-carousel__arrow rol-carousel__arrow--right">
          <Icon name="chevron-right" />
        </button>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, reactive, Ref, ref, ToRefs, UnwrapRef, watch } from 'vue'
import Icon from '@rol-ui/icon'
import { RCarouselItemData, RCarouselItemProps } from './carousel-item.vue'
interface RCarouselProps {
  initialIndex: number
  height: string
  trigger: string
  autoplay: boolean
  interval: number
  indicatorPosition: string
  indicator: boolean
  arrow: string
  type: string
  loop: boolean
  direction: string
}
type UnionCarouselItemData = RCarouselItemProps & ToRefs<RCarouselItemData>
interface CarouselItem extends UnionCarouselItemData {
  uid: number
  translateItem: (index: number, activeIndex: number, oldIndex: number) => void
}
export interface InjectCarouselScope {
  direction: string
  offsetWidth: Ref<number>
  offsetHeight: Ref<number>
  type: string
  items: Ref<UnwrapRef<CarouselItem[]>>
  loop: boolean
  updateItems: (item: CarouselItem) => void
  setActiveItem: (index: number) => void
}
export default defineComponent({
  name: 'RolCarousel',
  components: {
    Icon,
  },
  props: {
    initialIndex: {
      type: Number,
      default: 0,
    },
    height: { type: String, default: '' },
    trigger: {
      type: String,
      default: 'hover',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    indicatorPosition: { type: String, default: '' },
    indicator: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: String,
      default: 'hover',
    },
    type: { type: String, default: '' },
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val: string) {
        return ['horizontal', 'vertical'].includes(val)
      },
    },
  },
  emits: ['change'],
  setup(props: RCarouselProps, { emit }) {
    const data = reactive<{
      activeIndex: number
      containerWidth: number
      timer: null | ReturnType<typeof setInterval>
      hover: boolean
    }>({
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false,
    })
    const items = ref<CarouselItem[]>([])
    const root = ref<HTMLDivElement | null>(null)
    const offsetWidth = ref(0)
    const offsetHeight = ref(0)

    const carouselClasses = computed(() => {
      const classes = ['rol-carousel', 'rol-carousel--' + props.direction]
      if (props.type === 'card') {
        classes.push('rol-carousel--card')
      }
      return classes
    })

    const arrowDisplay = computed(() => props.arrow !== 'never' && props.direction !== 'vertical')

    const updateItems = item => {
      items.value.push(item)
    }

    const setActiveItem = (index: number | string) => {
      if (typeof index === 'string') {
        const filteredItems = items.value.filter(item => item.name === index)
        if (filteredItems.length > 0) {
          index = items.value.indexOf(filteredItems[0])
        }
      }
      index = Number(index)
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Rol-UI Warn][Carousel]index must be an integer.')
        return
      }
      const oldIndex = data.activeIndex
      if (index < 0) {
        data.activeIndex = props.loop ? length - 1 : 0
      } else if (index >= length) {
        data.activeIndex = props.loop ? 0 : length - 1
      } else {
        data.activeIndex = index
      }
    }

    const startTimer = () => {
      if (props.interval <= 0 || !props.autoplay || data.timer) return
      data.timer = setInterval(() => playSlides(), props.interval)
    }

    const playSlides = () => {
      if (data.activeIndex < items.value.length - 1) {
        data.activeIndex = data.activeIndex + 1
      } else if (props.loop) {
        data.activeIndex = 0
      }
    }

    const resetItemPosition = (oldIndex: number) => {
      items.value.forEach((item, index) => {
        item.translateItem(index, data.activeIndex, oldIndex)
      })
    }

    watch(
      () => data.activeIndex,
      (current, prev) => {
        resetItemPosition(prev)
        if (prev > -1) {
          emit('change', current, prev)
        }
      },
    )

    onMounted(() => {
      if (root.value) {
        offsetWidth.value = root.value.offsetWidth
        offsetHeight.value = root.value.offsetHeight
      }
      if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
        data.activeIndex = props.initialIndex
      }
      startTimer()
    })

    provide<InjectCarouselScope>('injectCarouselScope', {
      direction: props.direction,
      offsetWidth,
      offsetHeight,
      type: props.type,
      items,
      loop: props.loop,
      updateItems,
      setActiveItem,
    })

    return {
      carouselClasses,
      arrowDisplay,
      root,
    }
  },
})
</script>
