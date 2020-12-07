/* eslint-disable */
import { ComponentPublicInstance } from 'vue'
declare module '@vue/test-utils' {
  interface DOMWrapper<ElementType extends Element> {
    style: CSSStyleDeclaration
  }

  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSStyleDeclaration
  }
}
