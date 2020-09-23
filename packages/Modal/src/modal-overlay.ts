import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'RolOverlay',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: String,
    },
    zIndex: {
      type: Number,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const onMaskClick = () => {
      emit('click')
    }

    return () => {
      return props.mask
        ? h(
            'div',
            {
              class: [
                'rol-modal',
                { 'rol-modal-background': true },
                { 'is-centered': props.center },
                props.overlayClass,
              ],
              style: {
                zIndex: props.zIndex,
              },
              onClick: onMaskClick,
            },
            slots.default?.(),
          )
        : slots.default?.()
    }
  },
})
