import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'
import { App } from 'vue'

Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}
RadioGroup.install = (app: App): void => {
  app.component(RadioGroup.name, RadioGroup)
}
RadioButton.install = (app: App): void => {
  app.component(RadioButton.name, RadioButton)
}

export { Radio, RadioGroup, RadioButton }
