declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
declare type TimeoutHandle = ReturnType<typeof global.setTimeout>

declare type Nullable<T> = T | null


declare type CustomizedHTMLElement<T> = HTMLElement & T
