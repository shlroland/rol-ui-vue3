import { routeChild } from './types'
import Button from '/@packages/Button/README.md'
import Icon from '/@packages/Icon/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Button 按钮',
    component: Button,
    path: 'button',
  },
  {
    name: 'Icon 图标',
    component: Icon,
    path: 'icon',
  },
]

export default menuConfig
