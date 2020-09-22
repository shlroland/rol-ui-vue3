import { computed, defineComponent, h, provide } from 'vue'

export default defineComponent({
  name: 'RolRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
  },
  setup(props, { slots }) {
    provide('RolRow', props.gutter)
    const style = computed(() => {
      const cent = { marginLeft: '', marginRight: '' }
      if (props.gutter) {
        cent.marginLeft = `-${props.gutter / 2}px`
        cent.marginRight = cent.marginLeft
      }
      return cent
    })
    console.log(props.type)
    return () =>
      h(
        props.tag,
        {
          class: [
            'rol-row',
            props.type === 'flex' ? 'rol-row--flex' : '',
            props.justify !== 'start' ? `is-justify-${props.justify}` : '',
            props.align !== 'top' ? `is-align-${props.align}` : '',
          ],
          style: style.value,
        },
        slots.default?.(),
      )
  },
})
