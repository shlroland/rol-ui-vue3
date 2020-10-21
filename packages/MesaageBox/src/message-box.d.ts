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
