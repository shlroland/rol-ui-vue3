// export { default as Checkbox } from './src/checkbox.vue'
// export { default as CheckboxGroup } from './src/checkbox-group.vue'
// export { default as CheckboxButton } from './src/checkbox-button.vue'

import { App } from 'vue'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'
import CheckboxButton from './src/checkbox-button.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}
CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}
CheckboxButton.install = (app: App): void => {
  app.component(CheckboxButton.name, CheckboxButton)
}

export { Checkbox, CheckboxGroup, CheckboxButton }
