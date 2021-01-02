// export { default } from './src/dropdown'
// export { default as DropdownMenu } from './src/dropdown-menu.vue'
// export { default as DropdownItem } from './src/dropdown-item.vue'
import { App } from 'vue'
import Dropdown from './src/dropdown.vue'
import DropdownMenu from './src/dropdown-menu.vue'
import DropdownItem from './src/dropdown-item.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}
DropdownMenu.install = (app: App): void => {
  app.component(DropdownMenu.name, DropdownMenu)
}
DropdownItem.install = (app: App): void => {
  app.component(DropdownItem.name, DropdownItem)
}

export { Dropdown, DropdownMenu, DropdownItem }
