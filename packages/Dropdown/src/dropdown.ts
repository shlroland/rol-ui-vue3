import { ComponentPublicInstance, computed, defineComponent, h, ref, VNode, watchEffect } from 'vue'
import RolPopper from '@rol-ui/popper'

export default defineComponent({
  name: 'RolDropdown',
  components: {
    RolPopper,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    effect: {
      type: String,
      default: 'light',
    },
  },
  setup(props, { slots }) {
    const visible = ref(true)
    const triggerVnode = ref<Nullable<VNode>>(null)
    const caretButton = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerElm = computed<Nullable<HTMLButtonElement>>(() =>
      !props.splitButton ? triggerVnode.value?.el : caretButton.value?.$el,
    )

    watchEffect(() => {
      triggerVnode.value = slots.default?.()[0]
    })

    return () =>
      h(
        RolPopper,
        {
          ref: 'popper',
          placement: props.placement,
          effect: props.effect,
          visibie: visible,
          manualMode: true,
          // 'onUpdate:visible': onVisibleUpdate,
          popperClass: 'rol-dropdown-popper',
          trigger: [props.trigger],
        },
        {
          default: () => slots.dropdown?.(),
          trigger: () =>
            h(
              'div',
              {
                class: 'rol-dropdown',
              },
              [triggerVnode.value],
            ),
        },
      )
  },
})
