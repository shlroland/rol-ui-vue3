<script lang="ts">
import { defineComponent, h, inject, PropType } from 'vue'
import { NOOP } from '@vue/shared'
import { Pane, RootTabs } from './tabs'

type RTabsAlign = PropType<'centered' | 'right'>
type RTabsSize = PropType<'small' | 'medium' | 'large'>
type RTabsType = PropType<'boxed'>

export default defineComponent({
  props: {
    align: {
      type: String as RTabsAlign,
      default: '',
      validator: (val: string) => {
        return ['centered', 'right', ''].includes(val)
      },
    },
    size: {
      type: String as RTabsSize,
      default: '',
      validator: (val: string) => {
        return ['small', 'medium', 'large', ''].includes(val)
      },
    },
    type: {
      type: String as RTabsType,
      default: '',
      validator: (val: string) => {
        return ['boxed', ''].includes(val)
      },
    },
    panes: {
      type: Array as PropType<Pane[]>,
      default: () => [] as Pane[],
    },
    currentName: {
      type: String,
      default: '',
    },
    onTabClick: {
      type: Function as PropType<(tab: Pane, tabName: string, ev: Event) => void>,
      default: NOOP,
    },
  },
  setup(props) {
    const rootTabs = inject<RootTabs>('rootTabs')
    // const changeTab = e => {

    // }

    return {}
  },
  render() {
    const { panes, align, size, type, onTabClick } = this
    const tabs = panes.map((pane, index) => {
      let tabName = pane.props.name || pane.index || `${index}`
      // const closable = pane.isClosable || editable
      pane.index = `${index}`
      const tabLabelContent = pane.instance.slots.label?.() || pane.props.label
      const tabindex = pane.active ? 0 : -1
      return h(
        'li',
        {
          class: {
            'is-active': pane.active,
          },
          id: `tab-${tabName}`,
          key: `tab-${tabName}`,
          'aria-controls': `pane-${tabName}`,
          role: 'tab',
          'aria-selected': pane.active,
          ref: `tab-${tabName}`,
          tabindex: tabindex,
          onClick: (ev: MouseEvent) => {
            onTabClick(pane, tabName, ev)
          },
        },
        [h('a', {}, [tabLabelContent])],
      )
      return pane
    })
    console.log(tabs)

    return h(
      'div',
      {
        class: ['rol-tabs__nav-wrap', align ? `is-${align}` : '', size ? `is-${size}` : '', type ? `is-${type}` : ''],
      },
      [h('ul', {}, tabs)],
    )
  },
})
</script>
