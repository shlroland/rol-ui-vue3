import { routeChild } from './types'
import Alert from '/@packages/Alert/README.md'
import Loading from '/@packages/Loading/README.md'
import Progress from '/@packages/Progress/README.md'
import Notification from '/@packages/Notification/README.md'
import Modal from '/@packages/Modal/README.md'
import MessageBox from '/@packages/MessageBox/README.md'
import Message from '/@packages/Message/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Alert 警告',
    component: Alert,
    path: 'alert',
  },
  {
    name: 'Loading 等待',
    component: Loading,
    path: 'Loading',
  },
  {
    name: 'Progress 进度条',
    component: Progress,
    path: 'progress',
  },
  {
    name: 'Notification 通知',
    component: Notification,
    path: 'notification',
  },
  {
    name: 'Modal 对话框',
    component: Modal,
    path: 'modal',
  },
  {
    name: 'MessageBox 弹框',
    component: MessageBox,
    path: 'messageBox',
  },
  {
    name: 'Message 消息提示',
    component: Message,
    path: 'message',
  },
]

export default menuConfig
