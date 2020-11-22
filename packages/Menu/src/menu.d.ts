import { ComputedRef, ExtractPropTypes, Ref } from 'vue'
import { Emitter } from 'mitt'

export interface RegisterMenuItem {
  index: string
  indexPath: ComputedRef<string[]>
  active: ComputedRef<boolean>
}
export interface RootMenuData {
  activeIndex: string
  openedMenus: unknown[]
  items: any
  submenus: any
  isMenuPopup: boolean
}

export interface RootMenuProps {
  defaultActive: string
  defaultOpeneds: unknown[]
  uniqueOpened: boolean
  router: boolean
  menuTrigger: string
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeBackgroundColor: string
  collapseTransition: boolean
}

export interface RMenuItemProps {
  index: string
  route: string | Record<string, unknown>
  popperClass: string
  disabled: boolean
  popperAppendToBody?: boolean
}

export interface RootMenuProvider {
  openedMenus: Ref<RootMenuData['openedMenus']>
  items: Ref<RootMenuData['items']>
  submenus: Ref<RootMenuData['submenus']>
  activeIndex: Ref<RootMenuData['activeIndex']>
  hoverBackground: Ref<string>
  isMenuPopup: boolean
  props: ExtractPropTypes<RootMenuProps>
  rootMenuEmit: Emitter['emit']
  rootMenuOn: Emitter['on']
  methods: {
    addMenuItem: (item: RegisterMenuItem) => void
    removeMenuItem: (item: RegisterMenuItem) => void
    addSubMenu: (item: RegisterMenuItem) => void
    removeSubMenu: (item: RegisterMenuItem) => void
    openMenu: (index: string, indexPath: Ref<string[]>) => void
    closeMenu: (index: string) => void
  }
}

export interface SubMenuProvider {
  addSubMenu: (item: RegisterMenuItem) => void
  removeSubMenu: (item: RegisterMenuItem) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}
