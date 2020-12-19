import { App } from 'vue'
import TimePicker from './src/time-picker'

TimePicker.install = (app: App) => {
  app.component(TimePicker.name, TimePicker)
}

export default TimePicker
export { default as CommonPicker } from './src/components/common/picker.vue'
export { default as TimePickPanel } from './src/components/panel-time-picker.vue'
