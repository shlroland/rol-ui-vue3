import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '@rol-ui/utils/time-constant'
import { CommonPicker } from '@rol-ui/time-picker'
import { defineComponent, h } from 'vue'
import DatePickerPanel from './components/panel-date-picker.vue'

const getPanel = (type:string) =>{
    return DatePickerPanel
}

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
      },{
          default: scopedProps => h(getPanel(props.type), scopedProps),
      })
  },
})
