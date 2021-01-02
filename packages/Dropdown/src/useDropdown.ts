import { EVENT_CODE } from '@rol-ui/utils/aria'
import { addClass, on } from '@rol-ui/utils/dom'
import { generateId } from '@rol-ui/utils/util'
import { ComponentInternalInstance, computed, inject, ref } from 'vue'
import { RolDropdownInstance } from './dropdown.type'

export const useDropdown = () => {
  const rolDropdown = inject<RolDropdownInstance>('rolDropdown', {})
  const _rolDropdownSize = computed(() => rolDropdown?.dropdownSize)

  return {
    rolDropdown,
    _rolDropdownSize,
  }
}

export const initDropdownDomEvent = (
  dropdownChildren: ComponentInternalInstance,
  triggerElm: HTMLButtonElement,
  _instance: any,
) => {
  const menuItems = ref<Nullable<HTMLButtonElement[]>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownElm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownElm.value = dropdownChildren?.subTree.el as HTMLElement

  const removeTabIndex = () => {
    triggerElm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach(item => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabIndex(ele: HTMLElement) {
    removeTabIndex()
    ele?.setAttribute('tabindex', '0')
  }

  const handleTriggerKeyDown = (ev: KeyboardEvent) => {
    const code = ev.code
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      removeTabIndex()
      resetTabIndex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      _instance.handleClick()
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
    }
  }

  const handleItemKeyDown = (ev: KeyboardEvent) => {
    const code = ev.code
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target as HTMLElement)
    const max = menuItemsArray.value.length - 1
    let nextIndex: number

    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else {
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabIndex()
      resetTabIndex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      triggerElmFocus()
      ;(target as HTMLElement).click()
      if (_instance.props.hideOnClick) {
        _instance.hide()
      }
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
      triggerElmFocus()
    }
  }
  const initAria = () => {
    dropdownElm.value.setAttribute('id', listId.value)
    triggerElm.setAttribute('aria-haspopup', 'list')
    triggerElm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerElm.setAttribute('role', 'button')
      triggerElm.setAttribute('tabindex', _instance.tabindex)
      addClass(triggerElm, 'rol-dropdown-selfdefine')
    }
  }

  const initEvent = () => {
    on(triggerElm, 'keydown', handleTriggerKeyDown)
    on(dropdownElm.value, 'keydown', handleItemKeyDown, true)
  }

  const initDomOperation = () => {
    menuItems.value = (dropdownElm.value.querySelectorAll("[tabindex='-1']") as unknown) as HTMLButtonElement[]
    menuItemsArray.value = [].slice.call(menuItems.value)
    initAria()
    initEvent()
  }

  function triggerElmFocus() {
    triggerElm?.focus?.()
  }

  initDomOperation()
}
