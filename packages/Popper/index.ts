import { App } from 'vue'
import Popper from './src/index'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

export default Popper

export { Effect } from './src/core/props'
export type { Placement, Options, RTrigger } from './src/core/props'
