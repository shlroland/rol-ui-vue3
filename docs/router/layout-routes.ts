import { routeChild } from './types'
import Grid from '/@packages/Grid/README.md'
import Layout from '/@packages/Layout/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Grid 栅格',
    component: Grid,
    path: 'grid',
  },
  {
    name: 'Layout 布局',
    component: Layout,
    path: 'layout',
  },
]

export default menuConfig
