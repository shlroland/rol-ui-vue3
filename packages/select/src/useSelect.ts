import { isEdge, isIE } from '@rol-ui/utils/is$'
import mitt from 'mitt'
import { computed, reactive, ref, VNode } from 'vue'
import { RolSelectCtx, States } from './type'

export const useSelectStates = (props: { multiple?: boolean }) => {
  const selectEmitter = mitt()
  return reactive({
    options: [],
    cachedOptions: [],
    createdSelected: false,
    selected: props.multiple ? [] : ({} as any),
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    selectEmitter,
    currentPlaceholder: '请选择',
  })
}

export const useSelect = (props: any, states: States, ctx: RolSelectCtx) => {
  const popper = ref<VNode | null>(null)
  const selectWrapper = ref<HTMLElement | null>(null)

  const selectSize = computed(() => props.size || 'normal')
  const dropMenuVisible = computed(() => states.visible)
  const selectDisabled = computed(() => props.disabled)
  const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !states.visible))

  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue
    return criteria
  })

  const iconClass = computed(() =>
    props.remote && props.filterable ? '' : states.visible ? 'arrow-down' : 'angle-down',
  )

  const onOptionDestroy = () => {
    return 0
  }

  const handleOptionSelect = () => {
    return 0
  }

  return {
    selectSize,
    dropMenuVisible,
    selectDisabled,
    showClose,
    iconClass,
    popper,
    selectWrapper,
    handleOptionSelect,
    onOptionDestroy,
    readonly,
  }
}
