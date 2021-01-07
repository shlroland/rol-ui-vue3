import { createBlock, Fragment, openBlock, VNode, VNodeChild, VNodeTypes } from 'vue'

export const isFragment = (node: VNode) => node.type === Fragment
export const isText = (node: VNode) => node.type === Text
export const isComment = (node: VNode) => node.type === Comment
export const isTemplate = (node: VNode) => node.type === 'template'

export enum PatchFlags {
  TEXT = 1,
  CLASS = 2,
  STYLE = 4,
  PROPS = 8,
  FULL_PROPS = 16,
  HYDRATE_EVENTS = 32,
  STABLE_FRAGMENT = 64,
  KEYED_FRAGMENT = 128,
  UNKEYED_FRAGMENT = 256,
  NEED_PATCH = 512,
  DYNAMIC_SLOTS = 1024,
  HOISTED = -1,
  BAIL = -2,
}

export const renderBlock = (
  node: VNodeTypes,
  props: any,
  children?: VNodeTypes[] | VNodeTypes,
  patchFlag?: number,
  patchProps?: string[],
) => {
  return openBlock(), createBlock(node, props, children, patchFlag, patchProps)
}

export const getFirstValidNode = (nodes: VNodeChild, maxDepth = 3): ReturnType<typeof getChildren> => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0] as VNode, maxDepth)
  } else {
    return getChildren(nodes as VNode, maxDepth)
  }
}

export const getChildren = (node: VNode, depth: number): undefined | VNode => {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children as VNodeChild, depth - 1) : undefined
  }
  return node
}
