// export { default as TabsNav } from './src/tabs-nav.vue'
// export { default as TabPane } from './src/tabs-pane.vue'
// export { default } from './src/tabs'
import { App } from 'vue'
import Tabs from './src/tabs'
import TabsNav from './src/tabs-nav.vue'
import TabPane from './src/tabs-pane.vue'

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
}
TabsNav.install = (app: App): void => {
  app.component(TabsNav.name, TabsNav)
}
TabPane.install = (app: App): void => {
  app.component(TabPane.name, TabPane)
}

export { Tabs, TabsNav, TabPane }
