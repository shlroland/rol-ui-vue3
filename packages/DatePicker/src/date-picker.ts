import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '@rol-ui/utils/timeConstant'
import { CommonPicker } from '@rol-ui/time-picker'
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'RolDatePicker',
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  setup(props) {
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    return () =>
      h(CommonPicker, {
        format,
        type: props.type,
        ...props,
      })
  },
})
