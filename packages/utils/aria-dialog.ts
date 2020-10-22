import Utils from './aria-utils'

let tabEvent: EventHandlerNonNull

class Dialog {
  public lastFocus: Nullable<Element> = null

  constructor(
    public dialogNode: Nullable<HTMLElement>,
    public focusAfterClosed: HTMLElement | string,
    public focusFirst: HTMLElement | string,
  ) {
    if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'dialog') {
      throw new Error('Dialog() requires a DOM element with ARIA role of dialog.')
    }

    if (typeof focusAfterClosed === 'string') {
      this.focusAfterClosed = document.getElementById(focusAfterClosed)
    } else if (typeof focusAfterClosed === 'object') {
      this.focusAfterClosed = focusAfterClosed
    } else {
      this.focusAfterClosed = null
    }

    if (typeof focusFirst === 'string') {
      this.focusFirst = document.getElementById(focusFirst)
    } else if (typeof focusFirst === 'object') {
      this.focusFirst = focusFirst
    } else {
      this.focusFirst = null
    }

    if (this.focusFirst) {
      ;(this.focusFirst as HTMLElement).focus()
    } else {
      Utils.focusFirstDescendant(this.dialogNode)
    }

    this.lastFocus = document.activeElement
    tabEvent = (e: KeyboardEvent) => {
      this.trapFocus(e)
    }
    this.addListeners()
  }

  addListeners(): void {
    document.addEventListener('focus', tabEvent, true)
  }

  removeListeners(): void {
    document.removeEventListener('focus', tabEvent, true)
  }

  closeDialog(): void {
    this.removeListeners()
    if (this.focusAfterClosed) {
      setTimeout(() => {
        ;(this.focusAfterClosed as HTMLElement).focus()
      })
    }
  }

  trapFocus(event: KeyboardEvent): void {
    if (Utils.IgnoreUtilFocusChanges) {
      return
    }
    if (this.dialogNode.contains(event.target as Node)) {
      this.lastFocus = event.target as HTMLElement
    } else {
      Utils.focusFirstDescendant(this.dialogNode)
      if (this.lastFocus === document.activeElement) {
        Utils.focusLastDescendant(this.dialogNode)
      }
      this.lastFocus = document.activeElement
    }
  }
}

export default Dialog
