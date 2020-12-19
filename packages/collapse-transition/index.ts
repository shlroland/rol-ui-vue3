// export { default } from './src/index.vue'
import { App } from 'vue'
import CollapseTransition from './src/index.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition
