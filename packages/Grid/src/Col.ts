import { PropType, defineComponent, inject, computed, h } from 'vue'

type RButtonSizeObject = {
  span: number
  offset: number
}

export default defineComponent({
  name: 'RolCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object] as PropType<number | RButtonSizeObject>,
      default: () => ({} as RButtonSizeObject),
    },
    sm: {
      type: [Number, Object] as PropType<number | RButtonSizeObject>,
      default: () => ({} as RButtonSizeObject),
    },
    md: {
      type: [Number, Object] as PropType<number | RButtonSizeObject>,
      default: () => ({} as RButtonSizeObject),
    },
    lg: {
      type: [Number, Object] as PropType<number | RButtonSizeObject>,
      default: () => ({} as RButtonSizeObject),
    },
    xl: {
      type: [Number, Object] as PropType<number | RButtonSizeObject>,
      default: () => ({} as RButtonSizeObject),
    },
  },
  setup(props, { slots }) {
    const gutter = inject('RolRow', 0)
    const style = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      }
      return {}
    })
    const classes = computed(() => {
      const cent: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach(prop => {
        const size = props[prop]
        if (typeof size === 'number' && size >= 0) {
          cent.push(
            prop !== 'span'
              ? `rol-col-${prop}-${props[prop]}`
              : `rol-col-${props[prop]}`,
          )
        }
      })
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach(size => {
        if (typeof props[size] === 'number') {
          cent.push(`rol-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size]
          Object.keys(sizeProps).forEach(prop => {
            cent.push(
              prop !== 'span'
                ? `rol-col-${size}-${prop}-${sizeProps[prop]}`
                : `rol-col-${size}-${sizeProps[prop]}`,
            )
          })
        }
      })
      return cent
    })

    return () =>
      h(
        'div',
        {
          class: ['rol-col', classes.value],
          style: style.value,
        },
        slots.default?.(),
      )
  },
})
