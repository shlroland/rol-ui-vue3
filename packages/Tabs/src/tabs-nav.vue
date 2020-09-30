<script lang="ts">
import {
  capitalize,
  computed,
  defineComponent,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  PropType,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { NOOP } from '@vue/shared'
import { addResizeListener, removeResizeListener, ResizableElement } from '@rol-ui/utils/resize-event'
import { off, on } from '@rol-ui/utils/dom'
import { Pane, RootTabs, RTabsAlign, RTabsSize, RTabsType } from './tabs'
import TabBar from './tabs-bar.vue'

type Nullable<T> = T | null
type RefElement = Nullable<HTMLElement>
interface Scrollable {
  next?: boolean
  prev?: number
}

export default defineComponent({
  name: 'RolTabNav',
  components: {
    TabBar,
  },
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
    fullwidth: Boolean,
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
    onTabRemove: {
      type: Function as PropType<(tab: Pane, ev: Event) => void>,
      default: NOOP,
    },
  },
  setup() {
    const rootTabs = inject<RootTabs>('rootTabs')

    const scrollable = ref<boolean | Scrollable>(false)
    const navOffset = ref(0)
    const isFocus = ref(false)
    const focusable = ref(true)

    const navScroll$ = ref<RefElement>(null)
    const nav$ = ref<RefElement>(null)
    // const el$ = ref<RefElement>(null)
    const sizeName = computed(() => {
      return ['top', 'bottom'].includes(rootTabs.props.tabPosition) ? 'width' : 'height'
    })
    const navStyle = computed(() => {
      const dir = sizeName.value === 'width' ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${navOffset.value}px)`,
      }
    })

    const scrollPrev = () => {
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value
      if (!currentOffset) return
      let newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0
      navOffset.value = newOffset
    }

    const scrollNext = () => {
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (navSize - currentOffset <= containerSize) return

      let newOffset =
        navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize

      navOffset.value = newOffset
    }

    const scrollToActiveTab = () => {
      if (!scrollable.value) return
      const nav = nav$.value
      // const activeTab = el$.value.querySelector('.is-active')
      const activeTab = navScroll$.value.querySelector('.is-active')
      if (!activeTab) return

      const navScroll = navScroll$.value
      const isHorizontal = ['top', 'bottom'].includes(rootTabs.props.tabPosition)
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const maxOffset = isHorizontal
        ? nav.offsetWidth - navScrollBounding.width
        : nav.offsetHeight - navScrollBounding.height
      const currentOffset = navOffset.value
      let newOffset = currentOffset

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top)
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom)
        }
      }
      newOffset = Math.max(newOffset, 0)
      navOffset.value = Math.min(newOffset, maxOffset)
    }

    const update = () => {
      if (!nav$.value) return
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value
      if (containerSize < navSize) {
        const currentOffset = navOffset.value
        scrollable.value = (scrollable.value || {}) as Scrollable
        scrollable.value.prev = currentOffset
        scrollable.value.next = currentOffset + containerSize < navSize
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize
        }
      } else {
        scrollable.value = false
        if (currentOffset > 0) {
          navOffset.value = 0
        }
      }
    }

    const setFocus = () => {
      if (focusable.value) {
        isFocus.value = true
      }
    }

    const removeFocus = () => {
      isFocus.value = false
    }

    const visibilityChangeHandler = () => {
      const visibility = document.visibilityState
      if (visibility === 'hidden') {
        focusable.value = false
      } else if (visibility === 'visible') {
        setTimeout(() => {
          focusable.value = true
        }, 50)
      }
    }

    const windowBlurHandler = () => {
      focusable.value = false
    }

    const windowFocusHandler = () => {
      setTimeout(() => {
        focusable.value = true
      }, 50)
    }

    onUpdated(() => {
      update()
    })

    onMounted(() => {
      addResizeListener(navScroll$.value as ResizableElement, update)
      on(document, 'visibilitychange', visibilityChangeHandler)
      on(window, 'blur', windowBlurHandler)
      on(window, 'focus', windowFocusHandler)
      setTimeout(() => {
        scrollToActiveTab()
      }, 0)
    })

    onBeforeUnmount(() => {
      if (navScroll$.value) {
        removeResizeListener(navScroll$.value as ResizableElement, update)
      }
      off(document, 'visibilitychange', visibilityChangeHandler)
      off(window, 'blur', windowBlurHandler)
      off(window, 'focus', windowFocusHandler)
    })

    return {
      rootTabs,
      navStyle,
      navScroll$,
      nav$,
      scrollToActiveTab,
      update,
      setFocus,
      removeFocus,
      visibilityChangeHandler,
      windowBlurHandler,
      windowFocusHandler,
      scrollPrev,
      scrollNext,
      scrollable,
    }
  },
  render() {
    const {
      panes,
      align,
      size,
      type,
      fullwidth,
      onTabClick,
      rootTabs,
      navStyle,
      scrollPrev,
      scrollNext,
      scrollable,
      setFocus,
      removeFocus,
      onTabRemove,
    } = this

    const scrollBtn = scrollable
      ? [
          h('span', {
            class: ['rol-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'],
            onClick: scrollPrev,
          }),
          h('span', {
            class: ['rol-tabs__nav-next', scrollable.next ? '' : 'is-disabled'],
            onClick: scrollNext,
          }),
        ]
      : null

    const tabs = panes.map((pane, index) => {
      let tabName = pane.props.name || pane.index || `${index}`
      const closable = pane.isClosable

      const btnClose = closable
        ? h(
            'span',
            {
              class: 'close-icon',
              onClick: ev => {
                onTabRemove(pane, ev)
              },
            },
            ['✕'],
          )
        : null

      pane.index = `${index}`
      const tabLabelContent = pane.instance.slots.label?.() || pane.props.label
      const tabindex = pane.active ? 0 : -1
      return h(
        'li',
        {
          class: {
            'is-active': pane.active,
            [`is-${rootTabs.props.tabPosition}`]: true,
            'is-closable': closable,
          },
          id: `tab-${tabName}`,
          key: `tab-${tabName}`,
          'aria-controls': `pane-${tabName}`,
          role: 'tab',
          'aria-selected': pane.active,
          ref: `tab-${tabName}`,
          tabindex: tabindex,
          onFocus: () => {
            setFocus()
          },
          onBlur: () => {
            removeFocus()
          },
          onClick: (ev: MouseEvent) => {
            onTabClick(pane, tabName, ev)
          },
        },
        [h('a', {}, [tabLabelContent, btnClose])],
      )
      return pane
    })

    return [
      scrollBtn,
      h(
        'div',
        {
          class: [
            'rol-tabs__nav-wrap',
            align ? `is-align-${align}` : '',
            size ? `is-${size}` : '',
            type ? `is-${type}` : '',
            fullwidth ? 'is-fullwidth' : '',
            scrollable ? 'is-scrollable' : '',
            `is-${rootTabs.props.tabPosition}`,
          ],
          ref: 'navScroll$',
        },
        [
          // h('div', { class: 'rol-tabs__nav-scroll', ref: 'navScroll$' }, [
          h(
            'ul',
            {
              class: ['rol-tabs__nav', `is-${rootTabs.props.tabPosition}`],
              ref: 'nav$',
              style: navStyle,
              role: 'tablist',
            },
            [
              !type
                ? h(TabBar, {
                    tabs: panes,
                  })
                : null,
              tabs,
            ],
          ),
          // ]),
        ],
      ),
    ]
  },
})
</script>
