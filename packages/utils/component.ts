import { Component, h, render } from 'vue'

const MOUNT_COMPONENT_REF = 'rol_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('rol_component_container')

export function createComponent(Component: Component | string, props: any, children: any) {
  const vnode = h(Component as Component, { ...props, ref: MOUNT_COMPONENT_REF }, children)
  const container = document.createElement('div')
  vnode[COMPONENT_CONTAINER_SYMBOL] = container
  render(vnode, container)
  return vnode.component
}
