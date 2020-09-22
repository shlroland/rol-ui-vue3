import { defineComponent, h, PropType } from 'vue'
import useModal from './useModal'
import RolOverlay from './modal-overlay'

type RModalType = PropType<'content' | 'card'>

const modal = defineComponent({
  name: 'RolModal',
  props: {
    type: {
      type: String as RModalType,
      default: 'content',
      validator: (val: string) => {
        return ['content', 'card'].includes(val)
      },
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    useModal(props, ctx)
    const overlay = h(RolOverlay, {}, [
      h('div', { class: ['rol-modal-content'], style: { width: '300px', height: '300px', background: 'white' } }),
      h('button', { class: ['rol-modal-close'] }),
    ])
    return () => overlay
  },
  // render() {
  //   console.log(arguments)
  //   // const overlay = h(RolOverlay, {})
  //   // return overlay
  // },
})

export default modal
