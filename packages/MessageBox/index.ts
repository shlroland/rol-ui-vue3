// export { default as MessageBoxIns } from './src/index.vue'
// export { default } from './src/messageBox'
import { App } from 'vue'
import MessageBox from './src/messageBox'
import MessageBoxIns from './src/index.vue'
;(MessageBox as any).install = (app: App): void => {
  app.config.globalProperties.$msgbox = MessageBox
  app.config.globalProperties.$messageBox = MessageBox
  app.config.globalProperties.$alert = MessageBox.alert
  app.config.globalProperties.$confirm = MessageBox.confirm
  app.config.globalProperties.$prompt = MessageBox.prompt
}

MessageBoxIns.install = (app: App): void => {
  app.component(MessageBoxIns.name, MessageBoxIns)
}

export default MessageBox
export { MessageBoxIns }
