import { createRouter, createWebHashHistory } from 'vue-router'
import DocMain from '../components/DocMain.vue'
import demos from './demo-routes'
import start from './start-routes'

console.log(demos, start)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/start/intro',
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

console.log(router)

export default router
