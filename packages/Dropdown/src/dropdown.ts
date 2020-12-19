import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  computed,
  ComputedRef,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  PropType,
  provide,
  Ref,
  ref,
  VNode,
  watch,
} from 'vue'
import RolPopper from '@rol-ui/popper'
import { Button as RolButton, RButtonSize } from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'
import { addClass, on, removeClass } from '@rol-ui/utils/dom'

export interface DropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  visible?: Ref<boolean>
  handleClick?: () => void
  commandHandler?: (...arg) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}

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
      type: String as PropType<RButtonSize>,
      default: 'normal',
      validator: (val: string) => {
        return ['small', 'normal', 'medium', 'large'].includes(val)
      },
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
  emits: ['visible-change', 'command'],
  setup(props, { slots, emit }) {
    const visible = ref(false)
    const timeout = ref<Nullable<number>>(null)
    const focusing = ref(false)

    const _instance = getCurrentInstance()

    const triggerVnode = ref<Nullable<VNode>>(null)
    const caretButton = ref<Nullable<ComponentPublicInstance>>(null)
    const popper = ref<Nullable<ComponentPublicInstance>>(null)

    const triggerElm = computed<Nullable<HTMLButtonElement>>(() =>
      !props.splitButton ? slots.default?.()[0]?.el : caretButton.value?.$el,
    )

    const handleClick = () => {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    const show = () => {
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)

      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        props.trigger === 'click' ? 0 : props.showTimeout,
      )
    }

    const hide = () => {
      if (triggerElm.value?.disabled) return
      removeTabIndex()
      if (props.tabindex >= 0) {
        resetTabIndex(triggerElm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        props.trigger === 'click' ? 0 : props.hideTimeout,
      )
    }

    watch(
      () => visible.value,
      val => {
        if (val) triggerElmFocus()
        if (!val) triggerElmBlur()
        emit('visible-change', val)
      },
    )
    watch(
      () => focusing.value,
      val => {
        const selfDefine = triggerElm.value
        if (selfDefine) {
          if (val) {
            addClass(selfDefine, 'focusing')
          } else {
            removeClass(selfDefine, 'focusing')
          }
        }
      },
    )

    const triggerElmFocus = () => {
      triggerElm.value?.focus?.()
    }
    const triggerElmBlur = () => {
      triggerElm.value?.blur?.()
    }

    const removeTabIndex = () => {
      triggerElm.value.setAttribute('tabindex', '-1')
    }

    const resetTabIndex = (ele: HTMLElement | null) => {
      removeTabIndex()
      ele?.setAttribute('tabindex', '0')
    }

    Object.assign(_instance, {
      handleClick,
      hide,
      resetTabIndex,
    })

    function commandHandler(...args) {
      emit('command', ...args)
    }

    provide('rolDropdown', {
      instance: _instance,
      dropdownSize: props.size,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerElm,
    })

    // watchEffect(() => {
    //   triggerVnode.value =
    // })
    const onVisibleUpdate = (val: boolean) => {
      visible.value = val
    }

    onMounted(() => {
      if (!props.splitButton) {
        on(triggerElm.value, 'focus', () => {
          focusing.value = true
        })
        on(triggerElm.value, 'blur', () => {
          focusing.value = false
        })
        on(triggerElm.value, 'click', () => {
          focusing.value = false
        })
      }

      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      }
    })

    return {
      onVisibleUpdate,
      triggerVnode,
      caretButton,
      visible,
      popper,
    }
  },
  render() {
    const { placement, effect, onVisibleUpdate, visible, trigger, $slots, splitButton, type, size } = this

    return h(
      RolPopper,
      {
        ref: 'popper',
        placement: placement,
        effect: effect,
        visible: visible,
        manualMode: true,
        'onUpdate:visible': onVisibleUpdate,
        popperClass: 'rol-dropdown-popper',
        trigger: [trigger],
      },
      {
        default: () => $slots.dropdown?.(),
        trigger: () =>
          h(
            'div',
            {
              class: 'rol-dropdown',
            },
            [
              !splitButton
                ? $slots.default?.()[0]
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
                            type: type,
                            size: size,
                            class: 'rol-dropdown__caret-left-button',
                          },
                          {
                            default: $slots.default?.()[0],
                          },
                        ),
                        h(
                          RolButton,
                          {
                            type: type,
                            size: size,
                            ref: 'caretButton',
                            class: 'rol-dropdown__caret-button',
                          },
                          {
                            default: () => h(RolIcon, { name: 'angle-down' }),
                          },
                        ),
                      ],
                    },
                  ),
            ],
          ),
      },
    )
  },
})
