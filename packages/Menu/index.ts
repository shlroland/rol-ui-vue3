import Menu from './src/menu.vue'
import MenuGroup from './src/menuGroup.vue'
import MenuItem from './src/menuItem.vue'
import Submenu from './src/submenu.vue'
import { App } from 'vue'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}
MenuGroup.install = (app: App): void => {
  app.component(MenuGroup.name, MenuGroup)
}
MenuItem.install = (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}
Submenu.install = (app: App): void => {
  app.component(Submenu.name, Submenu)
}

export { Menu, MenuGroup, MenuItem, Submenu }
