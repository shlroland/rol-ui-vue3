// export { default } from './src/date-picker'
import { App } from 'vue'
import DatePicker from './src/date-picker'

DatePicker.install = (app: App): void => {
  app.component(DatePicker.name, DatePicker)
}

export default DatePicker
