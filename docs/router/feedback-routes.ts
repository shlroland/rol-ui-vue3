import { routeChild } from './types'
// import Alert from '/@packages/Alert/README.md'
// import Loading from '/@packages/Loading/README.md'
// import Progress from '/@packages/Progress/README.md'
// import Notification from '/@packages/Notification/README.md'
// import Modal from '/@packages/Modal/README.md'
// import MessageBox from '/@packages/MessageBox/README.md'
// import Message from '/@packages/Message/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Alert 警告',
    component: () => import('/@packages/Alert/README.md'),
    path: 'alert',
  },
  {
    name: 'Loading 等待',
    component: () => import('/@packages/Loading/README.md'),
    path: 'Loading',
  },
  {
    name: 'Progress 进度条',
    component: () => import('/@packages/Progress/README.md'),
    path: 'progress',
  },
  {
    name: 'Notification 通知',
    component: () => import('/@packages/Notification/README.md'),
    path: 'notification',
  },
  {
    name: 'Modal 对话框',
    component: () => import('/@packages/Modal/README.md'),
    path: 'modal',
  },
  {
    name: 'MessageBox 弹框',
    component: () => import('/@packages/MessageBox/README.md'),
    path: 'messageBox',
  },
  {
    name: 'Message 消息提示',
    component: () => import('/@packages/Message/README.md'),
    path: 'message',
  },
]

export default menuConfig
