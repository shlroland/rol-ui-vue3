import { RefElement, RPopperOptions, PopperInstance, TriggerType } from './defaults'
import { ComponentPublicInstance, computed, CSSProperties, reactive, Ref, ref, SetupContext, watch } from 'vue'
import { generateId, isHTMLElement } from '@rol-ui/utils/util'
import usePopperOptions from './popper-options'
import PopupManager from '@rol-ui/utils/popup-manager'
import { $, isBool } from '@rol-ui/utils/is$'
import { createPopper } from '@popperjs/core'
import { isString } from 'lodash'

type ElementType = ComponentPublicInstance | HTMLElement
type EmitType = 'update:visible' | 'after-enter' | 'after-leave' | 'before-enter' | 'before-leave'
export const UPDATE_VISIBLE_EVENT = 'update:visible'

export default function usePopper(props: RPopperOptions, { emit }: SetupContext<EmitType[]>) {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref(null) as Ref<ElementType>
  const popperRef = ref<RefElement>(null)
  const popperId = `rol-popper-${generateId()}`
  const popperStyle = ref<CSSProperties>({ zIndex: PopupManager.nextZIndex() })

  let popperInstance: Nullable<PopperInstance> = null
  let showTimer: Nullable<TimeoutHandle> = null
  let hideTimer: Nullable<TimeoutHandle> = null
  let triggerFocused = false

  const isManualMode = () => props.manualMode || props.trigger === 'manual'

  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef,
  })
  const state = reactive({
    visible: !!props.visible,
  })

  const visibility = computed<boolean>({
    get() {
      if (props.disabled) {
        return false
      } else {
        return isBool(props.visible) ? props.visible : state.visible
      }
    },
    set(val) {
      if (isManualMode()) return
      isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, val) : (state.visible = val)
    },
  })

  const _show = () => {
    console.log(props.hideAfter)
    if (props.hideAfter) {
      hideTimer = window.setTimeout(() => {
        _hide()
      }, props.hideAfter)
    }
    visibility.value = true
  }

  const _hide = () => {
    visibility.value = false
  }

  const clearTimers = () => {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    if (isManualMode() || props.disabled) return
    clearTimers()
    if (props.showAfter === 0) {
      _show()
    } else {
      showTimer = window.setTimeout(() => {
        _show()
      }, props.showAfter)
    }
  }

  const hide = () => {
    if (isManualMode()) return
    clearTimers()
    if (props.closeDelay > 0) {
      hideTimer = window.setTimeout(() => {
        close()
      }, props.closeDelay)
    } else {
      close()
    }
  }

  const close = () => {
    _hide()
    if (props.disabled) {
      doDestroy(true)
    }
  }

  const doDestroy = (forceDestroy?: boolean) => {
    if (!popperInstance || ($(visibility) && !forceDestroy)) return
    detachPopper()
  }

  const detachPopper = () => {
    popperInstance?.destroy?.()
    popperInstance = null
  }

  const initializePopper = () => {
    if (!$(visibility)) return
    const unwrappedTrigger = $(triggerRef)
    const _trigger = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el
    popperInstance = createPopper(_trigger, $(popperRef), $(popperOptions))
    popperInstance.update()
  }

  const onPopperMouseEnter = () => {
    if (props.enterable && props.trigger !== 'click') {
      clearTimeout(hideTimer)
    }
  }

  const onPopperMouseLeave = () => {
    const { trigger } = props
    const shouldPrevent =
      (isString() && (trigger === 'click' || trigger === 'focus')) ||
      (trigger.length === 1 && (trigger[0] === 'click' || trigger[0] === 'focus'))

    if (shouldPrevent) return

    hide()
  }

  const events = {} as {
    onClick?: (e: Event) => void
    onMouseEnter?: (e: Event) => void
    onMouseLeave?: (e: Event) => void
    onFocus?: (e: Event) => void
    onBlur?: (e: Event) => void
  }

  const update = () => {
    if (!$(visibility)) {
      return
    }
    if (popperInstance) {
      popperInstance.update()
    } else {
      initializePopper()
    }
  }

  const onVisibilityChange = (toState: boolean) => {
    if (toState) {
      popperStyle.value.zIndex = PopupManager.nextZIndex()
      initializePopper()
    }
  }

  if (!isManualMode()) {
    const toggleState = () => {
      if ($(visibility)) {
        hide()
      } else {
        show()
      }
    }

    const popperEventsHandler = (e: Event) => {
      e.stopPropagation()
      switch (e.type) {
        case 'click': {
          if (triggerFocused) {
            triggerFocused = false
          } else {
            toggleState()
          }
          break
        }
        case 'mouseenter': {
          show()
          break
        }

        case 'mouseleave': {
          hide()
          break
        }
        case 'focus': {
          triggerFocused = true
          show()
          break
        }
        case 'blur': {
          triggerFocused = false
          hide()
          break
        }
      }
    }

    const mapEvents = (t: TriggerType) => {
      switch (t) {
        case 'click': {
          events.onClick = popperEventsHandler
          break
        }
        case 'hover': {
          events.onMouseEnter = popperEventsHandler
          events.onMouseLeave = popperEventsHandler
          break
        }
        case 'focus': {
          events.onFocus = popperEventsHandler
          events.onBlur = popperEventsHandler
          break
        }
        default:
          break
      }
    }

    if (Array.isArray(props.trigger)) {
      Object.values(props.trigger).map(mapEvents)
    } else {
      mapEvents(props.trigger as TriggerType)
    }
  }

  watch(popperOptions, val => {
    if (!popperInstance) return
    popperInstance.setOptions(val)
    popperInstance.update()
  })

  watch(visibility, onVisibilityChange)

  return {
    update,
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit('after-enter')
    },
    onAfterLeave: () => {
      detachPopper()
      emit('after-leave')
    },
    onBeforeEnter: () => {
      emit('before-enter')
    },
    onBeforeLeave: () => {
      emit('before-leave')
    },
    initializePopper,
    isManualMode,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperRef,
    popperStyle,
    triggerRef,
    visibility,
  }
}

export * from './defaults'
