import { App } from 'vue'
import Tooltip from './src/index.vue'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
