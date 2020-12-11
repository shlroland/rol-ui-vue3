import { defineComponent, h } from 'vue'
import { DEFAULT_FORMATS_TIME } from '@rol-ui/utils/timeConstant'
import Picker from './components/common/picker.vue'
import TimePickPanel from './components/panel-time-picker.vue'
import TimeRangePanel from './components/panel-time-range.vue'

export default defineComponent({
  name: 'RolTimePicker',
  install: null,
  props: {
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const type = props.isRange ? 'timerange' : 'time'
    const panel = props.isRange ? TimeRangePanel : TimePickPanel
    return () =>
      h(
        Picker,
        { format: DEFAULT_FORMATS_TIME, ...props, type },
        {
          default: scopedProps => h(panel, scopedProps),
        },
      )
  },
})
