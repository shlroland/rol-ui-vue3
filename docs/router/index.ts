import { createRouter, createWebHashHistory } from 'vue-router'
import DocMain from '../components/DocMain.vue'
import start from './start-routes'
import general from './general-routes'

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
      path: '/general',
      name: 'GENERAL COMPONENTS',
      component: DocMain,
      children: general,
    },
  ],
})

export default router
