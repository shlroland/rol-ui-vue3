// export { default } from './src/select.vue'
// export { default as SelectOption } from './src/select-option.vue'
// export { default as SelectOptionGroup } from './src/select-option-group.vue'
import { App } from 'vue'
import Select from './src/select.vue'
import SelectOption from './src/select-option.vue'
import SelectOptionGroup from './src/select-option-group.vue'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}
SelectOption.install = (app: App): void => {
  app.component(SelectOption.name, SelectOption)
}
SelectOptionGroup.install = (app: App): void => {
  app.component(SelectOptionGroup.name, SelectOptionGroup)
}

export { Select, SelectOption, SelectOptionGroup }
