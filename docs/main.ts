import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { Select,SelectOption } from '../packages/Select/index'
import '../lib/style/css/index.css'
// dev mode
// import ui from "../packages/vitec";
// import "../packages/theme/index.css";

// build mode
// import ui from "../packages/Button/lib/index";
// import "../packages/Button/lib/index.css";

// import './assets/style/main.css'
const app = createApp(App)
app.use(Select).use(SelectOption)
app.mount('#app')
