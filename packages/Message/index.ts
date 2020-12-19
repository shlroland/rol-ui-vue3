import { App } from 'vue'
import Message from './src/message'
import MessageIns from './src/index.vue'
;(Message as any).install = (app: App) => {
  app.config.globalProperties.$message = Message
}

MessageIns.install = (app: App): void => {
  app.component(MessageIns.name, MessageIns)
}

export default Message
export { MessageIns }
