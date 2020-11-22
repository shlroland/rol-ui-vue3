import { ComponentInternalInstance, computed, inject } from 'vue'
import { RootMenuProvider } from './menu'

export const emitEvent = {
  TOGGLECOLLAPSE: 'rootMenu:toggle-collapse',
  ITEMCLICK: 'menuItem:item-click',
  SUBMENUCLICK: 'submenu:submenu-click',
  SELECT: 'select',
  CLICK: 'click',
  CLOSE: 'close',
  OPEN: 'open',
  MOUSELEAVECHILD: 'submenu:mouse-leave-child',
  MOUSEENTERCHILD: 'submenu:mouse-enter-child',
}

export const useMenu = (instance: ComponentInternalInstance, currentIndex?: string) => {
  const rootMenu = inject<RootMenuProvider>('rootMenu')

  const indexPath = computed(() => {
    let parent = instance.parent
    const path = [currentIndex]
    while (parent.type.name !== 'RolMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index as string)
      }
      parent = parent.parent
    }
    return path
  })

  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && ['RolMenu', 'RolSubmenu'].indexOf(parent.type.name) === -1) {
      parent = parent.parent
    }
    return parent
  })

  const paddingStyle = computed(() => {
    let padding = 20
    let parent = instance.parent

    if (rootMenu.props.collapse) {
      padding = 20
    } else {
      while (parent && parent.type.name !== 'RolMenu') {
        if (parent.type.name === 'RolSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
    }
    return { paddingLeft: padding + 'px' }
  })
  return { parentMenu, paddingStyle, indexPath }
}
