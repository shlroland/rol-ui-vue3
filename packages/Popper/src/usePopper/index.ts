import { RefElement, RPopperOptions, PopperInstance } from './defaults'
import { ComponentPublicInstance, CSSProperties, reactive, Ref, ref, SetupContext } from 'vue'
import { generateId } from '@rol-ui/utils/util'
import usePopperOptions from './popper-options'
import PopupManager from '@rol-ui/utils/popup-manager'

type ElementType = ComponentPublicInstance | HTMLElement
type EmitType = 'update:visible' | 'after-enter' | 'after-leave' | 'before-enter' | 'before-leave'

export default function (props: RPopperOptions, { emit }: SetupContext<EmitType>) {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref(null) as Ref<ElementType>
  const popperRef = ref<RefElement>(null)
  const popperId = `rol-popper-${generateId()}`
  const popperStyle = ref<CSSProperties>({ zIndex: PopupManager.nextZIndex() })

  const popperInstance: Nullable<PopperInstance> = null
  const showTimer: Nullable<TimeoutHandle> = null
  const hideTimer: Nullable<TimeoutHandle> = null
  const triggerFocused = false

  const isManualMode = () => props.manualMode || props.trigger === 'manual'

  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef,
  })
  const state = reactive({
    visible: !!props.visible,
  })
}
