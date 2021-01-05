import { routeChild } from './types'
// import Checkbox from '/@packages/Checkbox/README.md'
// import Radio from '/@packages/Radio/README.md'
// import Switch from '/@packages/Switch/README.md'
// import Input from '/@packages/Input/README.md'
// import Select from '/@packages/Select/README.md'
// import TimePicker from '/@packages/TimePicker/README.md'
// import DatePicker from '/@packages/DatePicker/README.md'
// import DateTimePicker from '/@packages/DatePicker/README-dateTimePIcker.md'
// import Upload from '/@packages/upload/README.md'

const menuConfig: routeChild[] = [
  {
    name: 'Checkbox 复选框',
    component: () => import('/@packages/Checkbox/README.md'),
    path: 'checkbox',
  },
  {
    name: 'Radio 单选框',
    component: () => import('/@packages/Radio/README.md'),
    path: 'radio',
  },
  {
    name: 'Switch 开关框',
    component: () => import('/@packages/Switch/README.md'),
    path: 'switch',
  },
  {
    name: 'Input 输入框',
    component: () => import('/@packages/Input/README.md'),
    path: 'input',
  },
  {
    name: 'Select 选择框',
    component: () => import('/@packages/Select/README.md'),
    path: 'select',
  },
  {
    name: 'TimePicker 时间选择器',
    component: () => import('/@packages/TimePicker/README.md'),
    path: 'timePicker',
  },
  {
    name: 'DatePicker 日期选择器',
    component: () => import('/@packages/DatePicker/README.md'),
    path: 'datePicker',
  },
  {
    name: 'DateTimePicker 日期时间选择器',
    component: () => import('/@packages/DatePicker/README-dateTimePIcker.md'),
    path: 'dateTimePicker',
  },
  {
    name: 'Upload 上传',
    component: () => import('/@packages/upload/README.md'),
    path: 'upload',
  },
]

export default menuConfig
