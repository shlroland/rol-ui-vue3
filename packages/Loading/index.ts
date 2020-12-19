// export { default as LoadingIns } from './src/index.vue'
// export { default, directive } from './src/directive'
// export { default as service } from './src/service'
import { App } from 'vue'
import LoadingIns from './src/index.vue'
import vLoading from './src/directive'
import LoadingService from './src/service'

LoadingIns.install = (app: App): void => {
  app.component(LoadingIns.name, LoadingIns)
}

export default {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = LoadingService
  },
}

export { LoadingIns, vLoading, LoadingService }
