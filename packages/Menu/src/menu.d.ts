import { ExtractPropTypes, Ref } from 'vue'

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
  activeTextColor: string
  collapseTransition: boolean
}

export interface RootMenuProvider {
  openedMenus: Ref<RootMenuData['openedMenus']>
  items: Ref<RootMenuData['items']>
  submenus: Ref<RootMenuData['submenus']>
  activeIndex: Ref<RootMenuData['activeIndex']>
  hoverBackground: Ref<string>
  isMenuPopup: Ref<RootMenuData['isMenuPopup']>

  props: ExtractPropTypes<RootMenuProps>

}
