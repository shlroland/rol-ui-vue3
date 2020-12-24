import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import RolUI from '../packages/rol-ui/index'
import '../lib/style/css/index.css'
import './assets/style/main.css'
// dev mode
// import ui from "../packages/vitec";
// import "../packages/theme/index.css";

const app = createApp(App)
app.use(RolUI)
app.mount('#app')
