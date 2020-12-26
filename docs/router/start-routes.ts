import { routeChild } from './types'
import Intro from '../../README.md'
import QuickStart from '../docs/quick-start.md'

const menuConfig: routeChild[] = [
  {
    name: 'Introduction 项目介绍',
    component: Intro,
    path: 'intro',
  },
  {
    name: 'QuickStart 快速上手',
    component: QuickStart,
    path: 'quickstart',
  },
]

export default menuConfig
