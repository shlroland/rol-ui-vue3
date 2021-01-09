// export { default as LoadingIns } from './src/index.vue'
// export { default, directive } from './src/directive'
// export { default as service } from './src/service'
import { App } from 'vue'
import vLoading from './src/directive'
import Loading from './src/index'

export default {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
}

export { vLoading, Loading }
