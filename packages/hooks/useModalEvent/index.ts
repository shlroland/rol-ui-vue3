import { watch } from 'vue'
import { on } from '@rol-ui/utils/dom'
import { EVENT_CODE } from '@rol-ui/utils/aria'
import type { Ref, ComputedRef } from 'vue'
import { isServer } from '@rol-ui/utils/is$'

type ModalInstance = {
  handleClose: () => void
}

const modalStack: ModalInstance[] = []

const closeModal = (e: KeyboardEvent) => {
  if (modalStack.length === 0) return
  if (e.code === EVENT_CODE.esc) {
    const topModal = modalStack[modalStack.length - 1]
    console.log(topModal)
    topModal.handleClose()
  }
}

export default (instance: ModalInstance, visibleRef: Ref<boolean> | ComputedRef) => {
  watch(
    () => visibleRef.value,
    val => {
      if (val) {
        modalStack.push(instance)
      } else {
        modalStack.splice(
          modalStack.findIndex(modal => modal === instance),
          1,
        )
      }
    },
  )
}

if (!isServer) {
  on(document, 'keydown', closeModal)
}
