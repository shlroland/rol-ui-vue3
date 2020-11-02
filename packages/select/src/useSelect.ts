import { isEdge, isIE } from '@rol-ui/utils/is$'
import mitt from 'mitt'
import { computed, reactive, ref, watch } from 'vue'
import { PopperVnode, RolSelectCtx, States } from './type'

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
  const popper = ref<PopperVnode | null>(null)
  const selectWrapper = ref<HTMLElement | null>(null)
  const reference = ref(null)
  const input = ref(null)
  const selectSize = computed(() => props.size || 'normal')
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

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || '加载中'
    } else {
      if (props.remote && states.query === '' && states.options.length === 0) return false
      if (props.filterable && states.query && states.options.length > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || '无匹配数据'
      }
      if (states.options.length === 0) {
        return props.noDataText || '无数据'
      }
    }
    return null
  })

  const dropMenuVisible = computed(() => states.visible && emptyText.value !== false)

  const onOptionDestroy = () => {
    return 0
  }

  const handleOptionSelect = () => {
    return 0
  }

  const handleFocus = (event: FocusEvent) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        states.visible = true
        if (props.filterable) {
          states.menuVisibleOnFocus = true
        }
      }
      ctx.emit('focus', event)
    } else {
      states.softFocus = false
    }
  }

  const toggleMenu = () => {
    if (props.automaticDropdown) return
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        states.visible = !states.visible
      }
      if (states.visible) {
        ;(input.value || reference.value)?.focus()
      }
    }
  }

  watch(
    () => states.visible,
    val => {
      if (!val) {
        console.log(11)
      } else {
        popper.value?.update?.()
        ctx.emit('visible-change', val)
      }
    },
  )

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
    handleFocus,
    toggleMenu,
    reference,
    input,
  }
}
