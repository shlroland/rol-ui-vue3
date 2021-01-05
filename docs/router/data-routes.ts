import { routeChild } from './types'
// import Avatar from '/@packages/Avatar/README.md'
// import Image from '/@packages/Image/README.md'
// import Badge from '/@packages/Badge/README.md'
// import Tag from '/@packages/Tag/README.md'
// import Card from '/@packages/Card/README.md'
// import PageHeader from '/@packages/PageHeader/README.md'
// import Carousel from '/@packages/Carousel/README.md'
// import Collapse from '/@packages/Collapse/README.md'
// import Tooltip from '/@packages/Tooltip/README.md'
// import Popover from '/@packages/Popover/README.md'
// import Popconfirm from '/@packages/Popconfirm/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Avatar 头像',
    component: () => import('/@packages/Avatar/README.md'),
    path: 'grid',
  },
  {
    name: 'Image 图像',
    component: () => import('/@packages/Image/README.md'),
    path: 'image',
  },
  {
    name: 'Badge 角标',
    component: () => import('/@packages/Badge/README.md'),
    path: 'badge',
  },
  {
    name: 'Tag 标签',
    component: () => import('/@packages/Tag/README.md'),
    path: 'tag',
  },
  {
    name: 'Card 卡片',
    component: () => import('/@packages/Card/README.md'),
    path: 'card',
  },
  {
    name: 'PageHeader 页头',
    component: () => import('/@packages/PageHeader/README.md'),
    path: 'pageHeader',
  },
  {
    name: 'Carousel 轮播',
    component: () => import('/@packages/Carousel/README.md'),
    path: 'carousel',
  },
  {
    name: 'Collapse 折叠面板',
    component: () => import('/@packages/Collapse/README.md'),
    path: 'collapse',
  },
  {
    name: 'Tooltip 文字提示',
    component: () => import('/@packages/Tooltip/README.md'),
    path: 'tooltip',
  },
  {
    name: 'Popover 气泡卡片',
    component: () => import('/@packages/Popover/README.md'),
    path: 'popover',
  },
  {
    name: 'Popconfirm 气泡确认框',
    component: () => import('/@packages/Popconfirm/README.md'),
    path: 'popconfirm',
  },
]

export default menuConfig
