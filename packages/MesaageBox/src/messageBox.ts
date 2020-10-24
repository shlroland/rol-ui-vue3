import { ComponentInternalInstance, createVNode, isVNode, render, VNode } from 'vue'
import { msgQueOptions, RolMessageBoxOptions } from './message-box'
import MsgBoxConstructor from './index.vue'
import { isServer } from '@rol-ui/utils/is$'

const PROP_KEYS = [
  'lockScroll',
  'showClose',
  'closeOnClickModal',
  'closeOnPressEscape',
  'closeOnHashChange',
  'center',
  'roundButton',
  'closeDelay',
  'zIndex',
  'modal',
  'modalFade',
  'modalClass',
  'modalAppendToBody',
  'lockScroll',
]

// component default merge props & data
const defaults = {
  title: '',
  message: '',
  type: '',
  iconClass: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false,
  distinguishCancelAndClose: false,
}

interface msgQueueItem {
  options: msgQueOptions
  callback?: any
  resolve?: (value?: any) => void
  reject?: (value?: any) => void
}

interface msgInstance extends ComponentInternalInstance {
  setupInstall: {
    state: {
      visible: boolean
      [propName: string]: any
    }
  }
  props: {
    [propName: string]: any
  }
}

const msgQueue: msgQueueItem[] = []
let currentMsg: msgQueueItem, instance: msgInstance

const defaultCallback = (action, ctx) => {
  if (currentMsg) {
    const callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (ctx.showInput) {
        callback(ctx.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (ctx.showInput) {
          currentMsg.resolve({ value: ctx.inputValue, action })
        } else {
          currentMsg.resolve(action)
        }
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action)
      }
    }
  }
}

const initInstance = () => {
  const container = document.createElement('div')
  const vnode = createVNode(MsgBoxConstructor)
  render(vnode, container)
  instance = vnode.component as msgInstance
}

const showNextMsg = () => {
  if (!instance) {
    initInstance()
  }
  debugger

  if (instance && instance.setupInstall.state.visible) return
  if (msgQueue.length > 0) {
    const props = {}
    const state = {}
    currentMsg = msgQueue.shift()
    const options = currentMsg.options
    Object.keys(options).forEach(key => {
      if (PROP_KEYS.includes(key)) {
        props[key] = options[key]
      } else {
        state[key] = options[key]
      }
    })

    const vmProps = instance.props
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        vmProps[prop] = props[prop]
      }
    }
    const vmState = instance.setupInstall.state
    vmState.action = ''
    if ((options as RolMessageBoxOptions).callback === undefined) {
      ;(options as RolMessageBoxOptions).callback = defaultCallback
    }
    for (const prop in state) {
      if (state.hasOwnProperty(prop)) {
        vmState[prop] = state[prop]
      }
    }

    if (isVNode((options as RolMessageBoxOptions).message)) {
      instance.slots.default = () => [(options as RolMessageBoxOptions).message as VNode]
    }
    const oldCb = (options as RolMessageBoxOptions).callback
    vmState.callback = (action, inst) => {
      oldCb(action, inst)
      showNextMsg()
    }
    document.body.appendChild(instance.vnode.el as Node)
    vmState.visible = true
  }
}

const MessageBox = (options: RolMessageBoxOptions | string, callback?): Promise<any> => {
  if (isServer) return
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options,
    }
    if (typeof callback === 'string') {
      options.title = callback
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: Object.assign({}, defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject,
      })
      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: Object.assign({}, defaults, options),
      callback: callback,
    })
    showNextMsg()
  }
}

export default MessageBox
