// export { default as NotificationIns } from './src/index.vue'
// export { default } from './src/notify'
import { App } from 'vue'
import notify from './src/notify'
import NotificationIns from './src/index.vue'
;(notify as any).install = (app: App) => {
  app.config.globalProperties.$notify = notify
}

NotificationIns.install = (app: App): void => {
  app.component(NotificationIns.name, NotificationIns)
}

export default notify
export { NotificationIns }
