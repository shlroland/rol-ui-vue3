import { ComponentOptions } from 'vue'

export declare type Menu = {
  name: string
  filePath: ComponentOptions
  path: string
}
export declare type SubMenu = {
  name: string
  children: Array<Menu>
}
