import { defineComponent, h } from 'vue'
import Picker from './components/common/picker.vue'

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
    return () => h(Picker, { type })
  },
})
