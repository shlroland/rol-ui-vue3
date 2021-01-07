import { App } from 'vue'
import Popper from './src/index'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

export default Popper

export { Effect } from './src/usePopper/defaults'
export type { Placement, Options, Trigger as RTrigger } from './src/usePopper/defaults'
