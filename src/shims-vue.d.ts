declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
declare type TimeoutHandle = ReturnType<typeof global.setTimeout>
