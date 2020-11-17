import { VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error' | ''
export type MessageBoxCloseAction = 'confirm' | 'cancel' | 'close' | ''
export type MessageBoxData = MessageBoxInputData

export interface MessageBoxInputData {
  value: string
  action: MessageBoxCloseAction
}

export interface MessageBoxInputValidator {
  (value: string): boolean | string
}

export declare class RolMessageBoxComponent {
  title: string
  message: string
  type: MessageType
  iconClass: string
  customClass: string
  showInput: boolean
  showClose: boolean
  inputValue: string
  inputPlaceholder: string
  inputType: string
  inputPattern: RegExp
  inputValidator: MessageBoxInputValidator
  inputErrorMessage: string
  showConfirmButton: boolean
  showCancelButton: boolean
  action: MessageBoxCloseAction
  dangerouslyUseHTMLString: boolean
  confirmButtonText: string
  cancelButtonText: string
  confirmButtonLoading: boolean
  cancelButtonLoading: boolean
  confirmButtonClass: string
  confirmButtonDisabled: boolean
  cancelButtonClass: string
  editorErrorMessage: string
  close(): any
}

export interface RolMessageBoxOptions {
  /** Title of the MessageBox */
  title?: string

  /** Content of the MessageBox */
  message?: string | VNode

  /** Message type, used for icon display */
  type?: MessageType

  /** Custom icon's class */
  iconClass?: string

  /** Custom class name for MessageBox */
  customClass?: string

  /** MessageBox closing callback if you don't prefer Promise */
  callback?: (action: MessageBoxCloseAction, instance: RolMessageBoxComponent) => void

  /** Callback before MessageBox closes, and it will prevent MessageBox from closing */
  beforeClose?: (action: MessageBoxCloseAction, instance: RolMessageBoxComponent, done: () => void) => void

  /** Whether to lock body scroll when MessageBox prompts */
  lockScroll?: boolean

  /** Whether to show a cancel button */
  showCancelButton?: boolean

  /** Whether to show a confirm button */
  showConfirmButton?: boolean

  /** Whether to show a close button */
  showClose?: boolean

  /** Text content of cancel button */
  cancelButtonText?: string

  /** Text content of confirm button */
  confirmButtonText?: string

  /** Custom class name of cancel button */
  cancelButtonClass?: string

  /** Custom class name of confirm button */
  confirmButtonClass?: string

  /** Whether to align the content in center */
  center?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Whether to use round button */
  roundButton?: boolean

  /** Whether MessageBox can be closed by clicking the mask */
  closeOnClickModal?: boolean

  /** Whether MessageBox can be closed by pressing the ESC */
  closeOnPressEscape?: boolean

  /** Whether to close MessageBox when hash changes */
  closeOnHashChange?: boolean

  /** Whether to show an input */
  showInput?: boolean

  /** Placeholder of input */
  inputPlaceholder?: string

  /** Initial value of input */
  inputValue?: string

  /** Regexp for the input */
  inputPattern?: RegExp

  /** Input Type: text, textArea, password or number */
  inputType?: string

  /** Validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage */
  inputValidator?: MessageBoxInputValidator

  /** Error message when validation fails */
  inputErrorMessage?: string

  /** Whether to distinguish canceling and closing */
  distinguishCancelAndClose?: boolean
}

export interface RolMessageBoxShortcutMethod {
  (message: string, title: string, options?: RolMessageBoxOptions): Promise<MessageBoxData>
  (message: string, options?: RolMessageBoxOptions): Promise<MessageBoxData>
}

export interface RolMessageBox {
  (message: string, title?: string, type?: string): Promise<MessageBoxData>
  (options: RolMessageBoxOptions): Promise<MessageBoxData>
  alert: RolMessageBoxShortcutMethod
  confirm: RolMessageBoxShortcutMethod
  prompt: RolMessageBoxShortcutMethod
  // setDefaults(defaults: RolMessageBoxOptions): void
  close(): void
}

export type msgQueOptions = RolMessageBoxComponent | RolMessageBoxOptions | string
