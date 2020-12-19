// export { default } from './src/Button.vue'
// export { default as ButtonGroup } from './src/ButtonGroup.vue'
import { App } from 'vue'
import Button from './src/Button.vue'
import ButtonGroup from './src/ButtonGroup.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export { Button, ButtonGroup }

export type { RButtonNativeType, RButtonShapeType, RButtonSize, RButtonType } from './src/ButtonType'
