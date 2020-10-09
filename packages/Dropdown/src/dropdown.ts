import { ComponentPublicInstance, computed, defineComponent, getCurrentInstance, h, ref, VNode, watchEffect } from 'vue'
import RolPopper from '@rol-ui/popper'
import RolButton from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolDropdown',
  components: {
    RolPopper,
    RolButton,
    RolIcon,
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
    const timeout = ref<Nullable<number>>(null)
    const focusing = ref(false)

    const _instance = getCurrentInstance()

    const triggerVnode = ref<Nullable<VNode>>(null)
    const caretButton = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerElm = computed<Nullable<HTMLButtonElement>>(() =>
      !props.splitButton ? triggerVnode.value?.el : caretButton.value?.$el,
    )

    const dropdownSize = computed(() => props.size)

    const onVisibleUpdate = (val: boolean) => (visible.value = val)
    watchEffect(() => {
      triggerVnode.value = !props.splitButton
        ? slots.default?.()[0]
        : h(
            'div',
            {
              class: 'rol-button-group',
            },
            {
              default: () => [
                h(
                  RolButton,
                  {
                    type: props.type,
                    size: dropdownSize.value,
                    ref: caretButton,
                    class: 'rol-dropdown__caret-left-button',
                  },
                  {
                    default: slots.default?.()[0],
                  },
                ),
                h(
                  RolButton,
                  {
                    type: props.type,
                    size: dropdownSize.value,
                    ref: caretButton,
                    class: 'rol-dropdown__caret-button',
                  },
                  {
                    default: () => h(RolIcon, { name: 'angle-down' }),
                  },
                ),
              ],
            },
          )
    })

    return () =>
      h(
        RolPopper,
        {
          ref: 'popper',
          placement: props.placement,
          effect: props.effect,
          visibie: visible.value,
          manualMode: true,
          'onUpdate:visible': onVisibleUpdate,
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
