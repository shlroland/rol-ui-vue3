import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RolUI from '../packages/rol-ui/index'
import './assets/style/main.css'
import './assets/style/demo-wrapper.scss'
import '../packages/style/index.scss'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)
app.use(RolUI)
app.use(router)
app.mount('#app')
