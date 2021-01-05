import { routeChild } from './types'
// import Grid from '/@packages/Grid/README.md'
// import Layout from '/@packages/Layout/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Grid 栅格',
    component: () => import('/@packages/Grid/README.md'),
    path: 'grid',
  },
  {
    name: 'Layout 布局',
    component: () => import('/@packages/Layout/README.md'),
    path: 'layout',
  },
]

export default menuConfig
