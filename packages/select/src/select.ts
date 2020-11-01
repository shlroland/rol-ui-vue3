import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { defineComponent } from 'vue'
import { useSelect, useSelectStates } from './useSelect'

const Select = defineComponent({
  name: 'RolSelect',
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
    const { selectSize } = useSelect(props, states, ctx)

    return { selectSize }
  },
})

export default Select
