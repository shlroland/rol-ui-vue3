import type { App } from 'vue'
import RolAlert from '@rol-ui/alert'
import RolAvatar from '@rol-ui/avatar'
import RolBadge from '@rol-ui/badge'
import { Breadcrumb as RolBreadcrumb, BreadcrumbItem as RolBreadcrumbItem } from '@rol-ui/breadcrumb'
import { Button as RolButton, ButtonGroup as RolButtonGroup } from '@rol-ui/button'
import RolCard from '@rol-ui/card'
import { Carousel as RolCarousel, CarouselItem as RolCarouselItem } from '@rol-ui/carousel'
import {
  Checkbox as RolCheckbox,
  CheckboxButton as RolCheckboxButton,
  CheckboxGroup as RolCheckboxGroup,
} from '@rol-ui/checkbox'
import { Collapse as RolCollapse, CollapseItem as RolCollapseItem } from '@rol-ui/collapse'
import RolCollapseTransition from '@rol-ui/collapse-transition'
import RolDatePicker from '@rol-ui/date-picker'
import RolDivider from '@rol-ui/divider'
import {
  Dropdown as RolDropdown,
  DropdownItem as RolDropdownItem,
  DropdownMenu as RolDropdownMenu,
} from '@rol-ui/dropdown'
import { Row as RolRow, Col as RolCol } from '@rol-ui/grid'
import RolIcon from '@rol-ui/icon'
import RolImage from '@rol-ui/image'
import RolInput from '@rol-ui/input'
import {
  Container as RolContainer,
  Aside as RolAside,
  Footer as RolFooter,
  Header as RolHeader,
  Main as RolMain,
} from '@rol-ui/layout'
import RolLoading from '@rol-ui/loading'
import {
  Menu as RolMenu,
  MenuGroup as RolMenuGroup,
  MenuItem as RolMenuItem,
  Submenu as RolSubmenu,
} from '@rol-ui/menu'
import RolMessageBox, { MessageBoxIns as RolMessageBoxWrap } from '@rol-ui/message-box'
import RolMessage, { MessageIns as RolMessageWrap } from '@rol-ui/message'
import RolModal from '@rol-ui/modal'
import RolNotification, { NotificationIns as RolNotifyWrap } from '@rol-ui/notification'
import RolPageHeader from '@rol-ui/page-header'
import RolPagination from '@rol-ui/pagination'
import RolPopconfirm from '@rol-ui/popconfirm'
import RolPopover from '@rol-ui/popover'
import RolPopper from '@rol-ui/popper'
import RolProgress from '@rol-ui/progress'
import { Radio as RolRadio, RadioGroup as RolRadioGroup, RadioButton } from '@rol-ui/radio'
import RolScrollBar from '@rol-ui/scrollbar'
import {
  Select as RolSelect,
  SelectOption as RolSelectOption,
  SelectOptionGroup as RolSelectOptionGroup,
} from '@rol-ui/select'
import RolSwitch from '@rol-ui/switch'
import { Tabs as RolTabs, TabsNav as RolTabsNav, TabPane as RolTabPane } from '@rol-ui/tabs'
import { Tag as RolTag, Tags as RolTagGroup, TagsAddons as RolTagsAddons } from '@rol-ui/tag'
import RolTimePicker from '@rol-ui/time-picker'
import RolTooltip from '@rol-ui/tooltip'
import RolUpload from '@rol-ui/upload'
import { InstallOptions } from '@rol-ui/utils/config'
import { version as version_ } from './version'

const version = version_

let $ROLUI = {} as InstallOptions
const setConfig = (option: InstallOptions): void => {
  $ROLUI = option
}

const defaultInstallOpt: InstallOptions = {
  size: '',
  zIndex: 2000,
}

const components = [
  RolAlert,
  RolAvatar,
  RolBadge,
  RolBreadcrumb,
  RolBreadcrumbItem,
  RolButton,
  RolButtonGroup,
  RolCard,
  RolCarousel,
  RolCarouselItem,
  RolCheckbox,
  RolCheckboxButton,
  RolCheckboxGroup,
  RolCollapse,
  RolCollapseItem,
  RolCollapseTransition,
  RolDatePicker,
  RolDivider,
  RolDropdown,
  RolDropdownItem,
  RolDropdownMenu,
  RolRow,
  RolCol,
  RolIcon,
  RolImage,
  RolInput,
  RolContainer,
  RolAside,
  RolFooter,
  RolHeader,
  RolMain,
  RolMenu,
  RolMenuGroup,
  RolMenuItem,
  RolSubmenu,
  RolMessageBoxWrap,
  RolMessageWrap,
  RolModal,
  RolNotifyWrap,
  RolPageHeader,
  RolPagination,
  RolPopconfirm,
  RolPopover,
  RolPopper,
  RolProgress,
  RolRadio,
  RolRadioGroup,
  RadioButton,
  RolScrollBar,
  RolSelect,
  RolSelectOption,
  RolSelectOptionGroup,
  RolSwitch,
  RolTabs,
  RolTabsNav,
  RolTabPane,
  RolTag,
  RolTagGroup,
  RolTagsAddons,
  RolTimePicker,
  RolTooltip,
  RolUpload,
]

const plugins = [RolLoading, RolMessageBox, RolMessage, RolNotification]

const install = (app: App, option: InstallOptions): void => {
  const option_ = Object.assign(defaultInstallOpt, option)
  app.config.globalProperties.$ROLUI = option_
  setConfig(option_)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin as any)
  })
}

export {
  RolAlert,
  RolAvatar,
  RolBadge,
  RolBreadcrumb,
  RolBreadcrumbItem,
  RolButton,
  RolButtonGroup,
  RolCard,
  RolCarousel,
  RolCarouselItem,
  RolCheckbox,
  RolCheckboxButton,
  RolCheckboxGroup,
  RolCollapse,
  RolCollapseItem,
  RolCollapseTransition,
  RolDatePicker,
  RolDivider,
  RolDropdown,
  RolDropdownItem,
  RolDropdownMenu,
  RolRow,
  RolCol,
  RolIcon,
  RolImage,
  RolInput,
  RolContainer,
  RolAside,
  RolFooter,
  RolHeader,
  RolMain,
  RolMenu,
  RolMenuGroup,
  RolMenuItem,
  RolSubmenu,
  RolMessageBoxWrap,
  RolMessageWrap,
  RolModal,
  RolNotifyWrap,
  RolPageHeader,
  RolPagination,
  RolPopconfirm,
  RolPopover,
  RolPopper,
  RolProgress,
  RolRadio,
  RolRadioGroup,
  RadioButton,
  RolScrollBar,
  RolSelect,
  RolSelectOption,
  RolSelectOptionGroup,
  RolSwitch,
  RolTabs,
  RolTabsNav,
  RolTabPane,
  RolTag,
  RolTagGroup,
  RolTagsAddons,
  RolTimePicker,
  RolTooltip,
  RolUpload,
  RolLoading,
  RolMessageBox,
  RolMessage,
  RolNotification,
  install,
  version,
}

export default {
  install,
  version,
}
