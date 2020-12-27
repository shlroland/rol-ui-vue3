import { createRouter, createWebHashHistory } from 'vue-router'
import DocMain from '../components/DocMain.vue'
import start from './start-routes'
import general from './general-routes'
import layout from './layout-routes'
import form from './form-routes'
import data from './data-routes'

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
      path: '/general',
      name: 'GENERAL COMPONENTS',
      component: DocMain,
      children: general,
    },
    {
      path: '/layout',
      name: 'LAYOUT COMPONENTS',
      component: DocMain,
      children: layout,
    },
    {
      path: '/form',
      name: 'FORM COMPONENTS',
      component: DocMain,
      children: form,
    },
    {
      path: '/data',
      name: 'DATA COMPONENTS',
      component: DocMain,
      children: data,
    },
  ],
})

export default router
