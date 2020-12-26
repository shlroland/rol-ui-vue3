import { createRouter, createWebHashHistory } from 'vue-router'
import DocMain from '../components/DocMain.vue'
import demos from './demo-routes'
import start from './start-routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/start/quickstart',
    },
    {
      path: '/start',
      name: 'GET STARTED',
      component: DocMain,
      children: start,
    },
    {
      path: '/doc',
      component: DocMain,
      children: demos,
    },
  ],
})

export default router
