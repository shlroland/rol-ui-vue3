// export { default } from './src/index.vue'

import { App } from 'vue'
import Icon from './src/index.vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon
export type { RotateProps, IconProps, SizeProps, FlipProps } from './src/IconType'
