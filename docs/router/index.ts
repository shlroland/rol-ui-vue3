import { createRouter, createWebHashHistory } from 'vue-router'
import DocMain from '../components/DocMain.vue'
import start from './start-routes'
import general from './general-routes'
import layout from './layout-routes'
import form from './form-routes'
import data from './data-routes'
import navigation from './navigation-routes'
import feedback from './feedback-routes'

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
    {
      path: '/navigation',
      name: 'NAVIGATION COMPONENTS',
      component: DocMain,
      children: navigation,
    },
    {
      path: '/feedback',
      name: 'FEEDBACK COMPONENTS',
      component: DocMain,
      children: feedback,
    },
  ],
})

export default router
