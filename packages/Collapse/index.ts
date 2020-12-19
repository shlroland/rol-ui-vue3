// export { default as Collapse } from './src/collapse.vue'
// export { default as CollapseItem } from './src/collapse-item.vue'
import { App } from 'vue'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
}

CollapseItem.install = (app: App): void => {
  app.component(CollapseItem.name, CollapseItem)
}

export { Collapse, CollapseItem }
