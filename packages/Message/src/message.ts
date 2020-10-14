import { isServer } from '@rol-ui/utils/is$'
import PopupManager from '@rol-ui/utils/popup-manager'
import MessageConstrutor from './index.vue'
import { createVNode, isVNode, nextTick, render, VNode } from 'vue'

export type MessageVM = VNode

export type RMessageOptions = {
  customClass?: string
  center?: boolean
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 3000
  iconClass?: string
  id?: string
  message?: string | VNode
  offset?: number // defaults 20
  onClose?: () => void
  showClose?: boolean // default false
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | ''
  zIndex?: number
}

type MessageQueueItem = {
  vm: MessageVM
  $el: HTMLElement
}

export type MessageQueue = Array<MessageQueueItem>

export interface RMessageHandle {
  close: () => void
}

export interface RMessage {
  (options?: RMessageOptions | string): RMessageHandle
  closeAll(): void
}

let vm: MessageVM
const instances: MessageQueue = []
let seed = 1

const Message: RMessage = function (options = {}): RMessageHandle {
  if (isServer) return

  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }

  let verticalOffset = options.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const id = 'message_' + seed++
  const userOnClose = options.onClose

  let props: RMessageOptions = <RMessageOptions>options

  props = {
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

  const message = options.message
  vm = createVNode(MessageConstrutor, props, isVNode(options.message) ? { default: () => message } : null)
  document.body.appendChild(container)

  render(vm, container)
  instances.push({ vm, $el: container })

  return {
    close: options.onClose,
  }
}

const close: (id: string, userOnClose?: (vm: MessageVM) => void) => void = (id, userOnClose) => {
  const index = instances.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (index === -1) {
    return
  }

  const { vm, $el } = instances[index]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  instances.splice(index, 1)
  nextTick(() => {
    document.body.removeChild($el)
  })
  const len = instances.length
  if (len < 1) return
  for (let i = index; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16
    instances[i].vm.component.props.offset = pos
  }
}

export function closeAll(): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    ;(instances[i].vm.component.props as RMessageOptions).onClose()
  }
}

;(['primary', 'success', 'warning', 'danger', 'info', 'link'] as const).forEach(type => {
  Object.assign(Message, {
    [type]: (options: MessageVM | RMessageOptions | string = {}) => {
      if (typeof options === 'string' || isVNode(options)) {
        options = {
          message: options,
        }
      }
      options.type = type
      return Message(options)
    },
  })
})

Message.closeAll = closeAll

export default Message
