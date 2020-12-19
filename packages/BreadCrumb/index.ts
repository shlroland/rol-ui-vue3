import { App } from 'vue'
import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

BreadcrumbItem.install = (app: App): void => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export { Breadcrumb, BreadcrumbItem }
