import { App } from 'vue'
import Popover from './src/index'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
}

export default Popover
