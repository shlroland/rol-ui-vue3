import { routeChild } from './types'
// import Tabs from '/@packages/Tabs/README.md'
// import Pagination from '/@packages/Pagination/README.md'
// import Menu from '/@packages/Menu/README.md'
// import Dropdown from '/@packages/Dropdown/README.md'
// import Breadcrumb from '/@packages/Breadcrumb/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Tabs 标签页',
    component: () => import('/@packages/Tabs/README.md'),
    path: 'tabs',
  },
  {
    name: 'Pagination 分页器',
    component: () => import('/@packages/Pagination/README.md'),
    path: 'Pagination',
  },
  {
    name: 'Menu 垂直菜单',
    component: () => import('/@packages/Menu/README.md'),
    path: 'Menu',
  },
  // {
  //   name: 'Dropdown 下拉菜单',
  //   component: Dropdown,
  //   path: 'dropdown',
  // },
  // {
  //   name: 'Breadcrumb 面包屑',
  //   component: Breadcrumb,
  //   path: 'breadcrumb',
  // },
]

export default menuConfig
