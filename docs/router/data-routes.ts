import { routeChild } from './types'
import Avatar from '/@packages/Avatar/README.md'
import Image from '/@packages/Image/README.md'
import Badge from '/@packages/Badge/README.md'
import Tag from '/@packages/Tag/README.md'
import Card from '/@packages/Card/README.md'
import PageHeader from '/@packages/PageHeader/README.md'
import Carousel from '/@packages/Carousel/README.md'
import Collapse from '/@packages/Collapse/README.md'
import Tooltip from '/@packages/Tooltip/README.md'
import Popover from '/@packages/Popover/README.md'
import Popconfirm from '/@packages/Popconfirm/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Avatar 头像',
    component: Avatar,
    path: 'grid',
  },
  {
    name: 'Image 图像',
    component: Image,
    path: 'image',
  },
  {
    name: 'Badge 角标',
    component: Badge,
    path: 'badge',
  },
  {
    name: 'Tag 标签',
    component: Tag,
    path: 'tag',
  },
  {
    name: 'Card 卡片',
    component: Card,
    path: 'card',
  },
  {
    name: 'PageHeader 页头',
    component: PageHeader,
    path: 'pageHeader',
  },
  {
    name: 'Carousel 轮播',
    component: Carousel,
    path: 'carousel',
  },
  {
    name: 'Collapse 折叠面板',
    component: Collapse,
    path: 'collapse',
  },
  {
    name: 'Tooltip 文字提示',
    component: Tooltip,
    path: 'tooltip',
  },
  {
    name: 'Popover 气泡卡片',
    component: Popover,
    path: 'popover',
  },
  {
    name: 'Popconfirm 气泡确认框',
    component: Popconfirm,
    path: 'popconfirm',
  },
]

export default menuConfig
