import {
  Component,
  ComponentInternalInstance,
  ComputedRef,
  defineComponent,
  Fragment,
  getCurrentInstance,
  h,
  onMounted,
  PropType,
  provide,
  Ref,
  ref,
  VNode,
  watch,
  watchEffect,
} from 'vue'
import TabNav from './tabs-nav.vue'

export interface RTabsProps {
  [key: string]: any
}

export interface RPaneProps {
  label: string
  name: string
  closable: boolean
  disabled: boolean
  lazy: boolean
}

export interface RootTabs {
  props: RTabsProps
  currentName: Ref<string>
}

type BeforeLeave = (newTabName: string, oldTabName: string) => void | Promise<void> | boolean
export type UpdatePaneStateCallback = (pane: Pane) => void

export interface Pane {
  uid: number
  instance: ComponentInternalInstance
  props: RPaneProps
  paneName: ComputedRef<string>
  active: ComputedRef<boolean>
  index: Ref<string>
  isClosable: ComputedRef<boolean>
}

export default defineComponent({
  name: 'Tabs',
  components: { TabNav },
  props: {
    activeName: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    beforeLeave: {
      type: Function as PropType<BeforeLeave>,
      default: null,
    },
  },
  emits: ['update:modelValue', 'input', 'tab-click'],
  setup(props, ctx) {
    const nav$ = ref<typeof TabNav>(null)
    const currentName = ref(props.modelValue || props.activeName || '0')
    const panes = ref([])
    const instance = getCurrentInstance()
    const paneStatesMap = {}

    provide<RootTabs>('rootTabs', {
      props,
      currentName,
    })

    provide<UpdatePaneStateCallback>('updatePaneState', (pane: Pane) => {
      paneStatesMap[pane.uid] = pane
    })

    watch(
      () => props.activeName,
      modelValue => {
        setCurrentName(modelValue)
      },
    )

    watch(
      () => props.modelValue,
      modelValue => {
        setCurrentName(modelValue)
      },
    )

    const getPaneInstanceFromSlot = (vnode: VNode, paneInstanceList: ComponentInternalInstance[] = []) => {
      Array.from((vnode.children || []) as ArrayLike<VNode>).forEach(node => {
        let type = node.type
        type = (type as Component).name || type

        if (type === 'TabsPane' && node.component) {
          paneInstanceList.push(node.component)
        } else if (type === Fragment || type === 'template') {
          getPaneInstanceFromSlot(node, paneInstanceList)
        }
      })
      return paneInstanceList
    }

    const setPaneInstances = (isForceUpdate = false) => {
      if (ctx.slots.default) {
        const children = instance.subTree.children
        const content = Array.from(children as ArrayLike<VNode>).find(({ props }) => {
          return props.class === 'rol-tabs__content'
        })
        if (!content) return

        const paneInstanceList: Pane[] = getPaneInstanceFromSlot(content).map(paneComponent => {
          return paneStatesMap[paneComponent.uid]
        })
        const panesChanged = !(
          paneInstanceList.length === panes.value.length &&
          paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid)
        )
        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList
        } else if (panes.value.length !== 0) {
          panes.value = []
        }
      }
    }

    const changeCurrentName = value => {
      currentName.value = value
      ctx.emit('input', value)
      ctx.emit('update:modelValue', value)
    }

    const setCurrentName = value => {
      if (currentName.value !== value && props.beforeLeave) {
        const before = props.beforeLeave(value, currentName.value)
        if (before && (before as Promise<void>).then) {
          ;(before as Promise<void>).then(
            () => {
              changeCurrentName(value)
              nav$.value && nav$.value.removeFocus()
            },
            () => {
              // ignore promise rejection in `before-leave` hook
            },
          )
        } else if (before !== false) {
          changeCurrentName(value)
        } else {
          changeCurrentName(value)
        }
      }
    }
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled) return
      setCurrentName(tabName)
      ctx.emit('tab-click', tab, event)
    }

    onMounted(() => {
      watchEffect(() => {
        setPaneInstances()
      })
    })
    return {
      nav$,
      currentName,
      panes,
      handleTabClick,
    }
  },
  render() {
    const { handleTabClick, panes, currentName } = this

    const header = h(
      'div',
      {
        class: ['rol-tabs__header'],
      },
      [
        h(TabNav, {
          panes,
          currentName,
        }),
      ],
    )

    const panels = h(
      'div',
      {
        class: 'rol-tabs__content',
      },
      this.$slots?.default(),
    )

    const tabs = h(
      'div',
      {
        class: ['rol-tabs'],
      },
      [header, panels],
    )
    return tabs
  },
})