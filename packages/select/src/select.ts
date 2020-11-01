import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { defineComponent, toRefs } from 'vue'
import { useSelect, useSelectStates } from './useSelect'
import Popper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'
import RolIcon from '@rol-ui/icon'

const Select = defineComponent({
  name: 'RolSelect',
  components: {
    Popper,
    RolInput,
    RolIcon,
  },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number],
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'medium', 'small', 'mini'].includes(val)
      },
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['remove-tag', 'clear', 'change', 'visible-change', 'focus', 'blur', UPDATE_MODELVALUE_EVENT],
  setup(props, ctx) {
    const states = useSelectStates(props)
    const { selectSize, dropMenuVisible,selectDisabled,showClose,iconClass } = useSelect(props, states, ctx)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
    } = toRefs(states)

    return {
      selectSize,
      selectDisabled,
      dropMenuVisible,
      showClose,
      iconClass,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
    }
  },
})

export default Select
