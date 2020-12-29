import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RolUI from '../packages/rol-ui/index'
import '../packages/style/index.scss'
import './assets/style/main.css'
import './assets/style/demo-wrapper.scss'

const app = createApp(App)
app.use(RolUI)
app.use(router)
app.mount('#app')
