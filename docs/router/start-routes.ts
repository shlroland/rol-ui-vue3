import { Menu, SubMenu } from './types'
import Intro from '../../README.md'
import QuickStart from '../docs/quick-start.md'

const menuConfig = [
  {
    name: 'Introduction(项目介绍)',
    component: Intro,
    path: 'intro',
  },
  {
    name: 'QuickStart(快速开始)',
    component: QuickStart,
    path: 'quickstart',
  },
]

export default menuConfig
