import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { isEdge, isIE, isKorean, isObject } from '@rol-ui/utils/is$'
import { getValueByPath } from '@rol-ui/utils/util'
import mitt from 'mitt'
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { PopperVnode, RolSelectCtx, States } from './type'
import isEqual from 'lodash/isEqual'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import lodashDebounce from 'lodash/debounce'
import { selectEvents } from './token'

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
  const input = ref<HTMLInputElement | null>(null)
  const tags = ref<HTMLElement | null>(null)
  const selectSize = computed(() => props.size || 'normal')
  const selectDisabled = computed(() => props.disabled)
  const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !states.visible))
  const collapseTagSize = computed(() => (['small', 'mini'].indexOf(selectSize.value) > -1 ? 'small' : 'normal'))
  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue
    return criteria
  })
  const debounce = computed(() => (props.remote ? 300 : 0))

  const iconClass = computed(() => (props.remote && props.filterable ? '' : 'angle-down'))

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

  const showNewOption = computed(() => {
    const hasExistingOption = states.options
      .filter(option => {
        return !option.created
      })
      .some(option => {
        return option.currentLabel === states.query
      })
    return props.filterable && props.allowCreate && states.query !== '' && !hasExistingOption
  })
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel
      handleQueryChange(states.query)
    }
  }

  const debouncedOnInputChange = lodashDebounce(() => {
    onInputChange()
  }, debounce.value)

  const debouncedQueryChange = lodashDebounce(e => {
    handleQueryChange(e.target.value)
  }, debounce.value)

  const getValueIndex = (arr = [], value) => {
    const _isObject = isObject(value)
    if (!_isObject) {
      return arr.indexOf(value)
    } else {
      const valueKey = props.valueKey
      let index = -1
      arr.some((item, i) => {
        if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
          index = i
          return true
        }
        return false
      })
      return index
    }
  }

  const resetInputHeight = () => {
    nextTick(() => {
      if (!reference.value) return
      const inputChildNodes = reference.value.$el.childNodes as NodeListOf<Element>
      const input = [].filter.call(inputChildNodes, (item: Element) => item.tagName === 'INPUT')[0] as HTMLInputElement
      const _tags = tags.value
      const sizeInMap = states.initialInputHeight || 40
      input.style.height =
        states.selected.length === 0
          ? sizeInMap + 'px'
          : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px'
      if (states.visible && emptyText.value !== false) {
        popper.value?.update?.()
      }
    })
  }

  const handleResize = () => {
    resetInputWidth()
    if (props.multiple) resetInputHeight()
  }

  const resetInputWidth = () => {
    states.inputWidth = reference.value?.$el.getBoundingClientRect().width
  }

  const onOptionDestroy = () => {
    return 0
  }

  const handleComposition = (event: CompositionEvent) => {
    const text = (event.target as HTMLInputElement).value
    if (event.type === 'compositionend') {
      states.isOnComposition = false
      nextTick(() => handleQueryChange(text))
    } else {
      const lastCharacter = text[text.length - 1] || ''
      states.isOnComposition = !isKorean(lastCharacter)
    }
  }

  const getOption = value => {
    let option
    const _isObject = isObject(props.modelValue)
    const _isNull = isNull(props.modelValue)
    const _isUndefined = isUndefined(props.modelValue)
    for (let i = states.cachedOptions.length - 1; i >= 0; i--) {
      const cachedOption = states.cachedOptions[i]
      const isEqual = _isObject
        ? getValueByPath(cachedOption.value, props.valueKey) === getValueByPath(props.modelValue, props.valueKey)
        : cachedOption.value === value
      if (isEqual) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
        }
        break
      }
    }
    if (option) return option
    const label = !_isObject && !_isNull && !_isUndefined ? value : ''
    const newOption = {
      value: value,
      currentLabel: label,
    }
    if (props.multiple) {
      ;(newOption as any).hitState = false
    }
    return newOption
  }

  const setSelected = () => {
    if (!props.multiple) {
      const option = getOption(props.modelValue)
      states.selectedLabel = option.currentLabel
      states.selected = option
      return
    }

    const result = []
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach(value => {
        result.push(getOption(value))
      })
    }
    states.selected = result
    nextTick(() => {
      resetInputHeight()
    })
  }

  const getValueKey = item => {
    if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
      return item.value
    } else {
      return getValueByPath(item.value, props.valueKey)
    }
  }

  const handleClearClick = (event: MouseEvent) => {
    event.stopPropagation()
    const value = props.multiple ? [] : ''
    ctx.emit(UPDATE_MODELVALUE_EVENT, value)
    ctx.emit('clear')
    emitChange(value)
    blur()
  }

  const emitChange = (val: any) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit('change', val)
    }
  }

  const handleOptionSelect = (option: any, byClick) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice()
      const optionIndex = getValueIndex(value, option.value)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value)
      }
      ctx.emit(UPDATE_MODELVALUE_EVENT, value)
      emitChange(value)
    } else {
      ctx.emit(UPDATE_MODELVALUE_EVENT, option.value)
      emitChange(option.value)
      states.visible = false
    }
  }

  const handleQueryChange = (val: any) => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (
      states.previousQuery === null &&
      (typeof props.filterMethod === 'function' || typeof props.remoteMethod === 'function')
    ) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) popper.value?.update()
    })
    states.hoverIndex = -1
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20
        console.log(input.value.value, length)
        states.inputLength = props.collapseTags ? Math.min(50, length) : length
        managePlaceholder()
        resetInputHeight()
      })
    }
    if (props.remote && typeof props.remoteMethod === 'function') {
      states.hoverIndex = -1
      props.remoteMethod(val)
    } else if (typeof props.filterMethod === 'function') {
      props.filterMethod(val)
      states.selectEmitter.emit(selectEvents.groupQueryChange)
    } else {
      states.filteredOptionsCount = states.optionsCount
      states.selectEmitter.emit(selectEvents.queryChange, val)
      states.selectEmitter.emit(selectEvents.groupQueryChange)
    }
  }

  const managePlaceholder = () => {
    if (states.currentPlaceholder !== '') {
      states.currentPlaceholder = input.value ? '' : states.cachedPlaceHolder
    }
  }

  const handleClose = () => {
    states.visible = false
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

  const deleteTag = (event: MouseEvent, tag: any) => {
    const index = states.selected.indexOf(tag)
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice()
      value.splice(index, 1)
      ctx.emit(UPDATE_MODELVALUE_EVENT, value)
      emitChange(value)
      ctx.emit('remove-tag', tag.value)
    }
    event.stopPropagation()
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

  const doDestroy = () => {
    popper.value?.doDestroy?.()
  }

  const blur = () => {
    states.visible = false
    reference.value.blur()
  }

  watch(
    () => states.visible,
    val => {
      if (!val) {
        doDestroy()
        input.value && input.value.blur()
        states.selectedLabel = ''
        states.query = ''
        states.previousQuery = null
        states.selectedLabel = ''
        states.inputLength = 20
        states.menuVisibleOnFocus = false
        nextTick(() => {
          if (input.value && input.value.value === '' && states.selected.length === 0) {
            states.currentPlaceholder = states.cachedPlaceHolder
          }
        })
        if (!props.multiple) {
          states.selectedLabel = states.selected.currentLabel
        }
        if (states.selected) {
          if (props.filterable) states.query = states.selectedLabel
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
      } else {
        popper.value?.update?.()
        ctx.emit('visible-change', val)
      }
    },
  )

  watch(
    () => props.modelValue,
    (val, oldValue) => {
      if (props.multiple) {
        resetInputHeight()
        if ((val && val.length > 0) || (input.value && states.query !== '')) {
          states.currentPlaceholder = ''
        } else {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
        if (props.filterable && !props.reserveKeyword) {
          states.query = ''
          handleQueryChange(states.query)
        }
      }
      setSelected()
      if (props.filterable && !props.multiple) {
        states.inputLength = 20
      }
    },
  )

  watch(
    () => selectDisabled.value,
    () => {
      nextTick(() => {
        if (props.multiple) {
          resetInputHeight()
        }
        resetInputHeight()
      })
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
    tags,
    showNewOption,
    handleClose,
    setSelected,
    handleClearClick,
    getValueKey,
    collapseTagSize,
    resetInputHeight,
    deleteTag,
    debouncedOnInputChange,
    debouncedQueryChange,
    handleComposition,
    handleResize,
  }
}
