import { isServer } from '@rol-ui/utils/is$'
import PopupManager from '@rol-ui/utils/popup-manager'
import NotificationConstructor from './index.vue'
import { createVNode, isVNode, nextTick, render, VNode } from 'vue'

export type NotificationVM = VNode
type NotificationQueueItem = {
  vm: NotificationVM
  $el: HTMLElement
}
export type NotificationQueue = Array<NotificationQueueItem>

export type NotificationOptions = {
  customClass?: string
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 4500
  iconClass?: string
  id?: string
  message?: string | VNode
  zIndex?: number
  onClose?: () => void
  onClick?: () => void
  offset?: number // defaults 0
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' // default top-right
  showClose?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | ''
  title?: string
}

export interface NotificationHandle {
  close: () => void
}

export type Notification = (options?: NotificationOptions) => NotificationHandle

let vm: NotificationVM
const notifications: NotificationQueue = []
let seed = 1

export const close = (id: string, userOnClose?: (vm: NotificationVM) => void) => {
  const index = notifications.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (index === -1) return

  const { vm, $el } = notifications[index]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })
  notifications.splice(index, 1)
  const len = notifications.length
  if (len < 1) return
  const position = vm.props.position

  for (let i = index; i < len; i++) {
    if (notifications[i].vm.component.props.position === position) {
      const verticalPos = vm.props.position.split('-')[0]
      const pos = parseInt(notifications[i].vm.el.style[verticalPos], 10) - removedHeight - 16
      notifications[i].vm.component.props.offset = pos
      // render(notifications[i].vm, notifications[i].$el)
    }
  }
}

const notification: Notification = (options = {}) => {
  if (isServer) return
  const position = options.position || 'top-right'
  let verticalOffset = options.offset || 0
  notifications
    .filter(({ vm }) => vm.component.props.position === position)
    .forEach(({ vm }) => {
      verticalOffset += (vm.el.offsetHeight || 0) + 16
    })
  verticalOffset += 16

  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options = {
    dangerouslyUseHTMLString: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
    offset: verticalOffset,
    id,
    zIndex: PopupManager.nextZIndex(),
  }

  const container = document.createElement('div')

  container.className = `container_${id}`
  container.style.zIndex = String()

  vm = createVNode(
    NotificationConstructor,
    options,
    isVNode(options.message)
      ? {
          default: () => options.message,
        }
      : null,
  )

  render(vm, container)
  notifications.push({ vm, $el: container })
  document.body.appendChild(container)
  return {
    close: options.onClose,
  }
}

const closeAll = () => {
  for (let i = notifications.length - 1; i >= 0; i--) {
    ;(notifications[i].vm.component.props as NotificationOptions).onClose()
  }
}

;(['primary', 'success', 'warning', 'danger', 'info', 'link'] as const).forEach(type => {
  Object.assign(
    notification,
    {
      [type]: (options: NotificationVM | NotificationOptions | string = {}) => {
        if (typeof options === 'string' || isVNode(options)) {
          options = {
            message: options,
          }
        }
        options.type = type
        return notification(options)
      },
    },
    {
      closeAll,
    },
  )
})

export default notification
