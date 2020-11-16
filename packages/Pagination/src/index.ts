import { computed, defineComponent, h, nextTick, provide, ref, watchEffect } from 'vue'
import Prev from './prev.vue'
import Next from './next.vue'
import Pager from './pager.vue'
import Total from './total.vue'
import Jumper from './jumper.vue'
import Sizes from './sizes.vue'
import { RPagination } from './pagination'

export default defineComponent({
  name: 'RolPagination',
  components: {
    Prev,
    Next,
    Pager,
    Total,
    Jumper,
    Sizes,
  },
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    small: Boolean,
    total: {
      type: Number,
      default: 1000,
    },
    pageCount: {
      type: Number,
      default: 50,
    },
    pagerCount: {
      type: Number,
      validator: (value: number) => {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
      },
      default: 7,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total',
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      },
    },
    popperClass: {
      type: String,
      default: '',
    },
    prevText: {
      type: String,
      default: '',
    },
    nextText: {
      type: String,
      default: '',
    },
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
  },
  emits: ['current-change', 'prev-click', 'next-click', 'update:currentPage', 'size-change'],
  setup(props, { emit }) {
    const internalCurrentPage = ref(1)
    const lastEmittedPage = ref(-1)
    const userChangePageSize = ref(false)
    const internalPageSize = ref(0)
    const internalPageCount = computed<Nullable<number>>(() => {
      if (typeof props.total === 'number') {
        return Math.max(1, Math.ceil(props.total / internalPageSize.value))
      } else if (typeof props.pageCount === 'number') {
        return Math.max(1, props.pageCount)
      }
      return null
    })

    const getValidCurrentPage = (value: number | string) => {
      if (typeof value === 'string') {
        value = parseInt(value, 10)
      }
      let resetValue: number | undefined
      const havePageCount = typeof internalPageCount.value === 'number'

      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1
      } else {
        if (value < 1) {
          resetValue = 1
        } else if (value > internalPageCount.value) {
          resetValue = internalPageCount.value
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1
      } else if (resetValue === 0) {
        resetValue = 1
      }

      return resetValue === undefined ? value : resetValue
    }

    const emitChange = () => {
      nextTick(() => {
        if (internalCurrentPage.value !== lastEmittedPage.value || userChangePageSize) {
          emit('current-change', internalCurrentPage.value)
          lastEmittedPage.value = internalCurrentPage.value
          userChangePageSize.value = false
        }
      })
    }

    const handleCurrentChange = (val: number) => {
      internalCurrentPage.value = getValidCurrentPage(val)
      userChangePageSize.value = true
      emitChange()
    }

    const handleSizesChange = (val: number) => {
      userChangePageSize.value = true
      internalPageSize.value = val
      emit('size-change', val)
    }

    const prev = () => {
      if (props.disabled) return
      const newVal = internalCurrentPage.value - 1
      internalCurrentPage.value = getValidCurrentPage(newVal)
      emit('prev-click', internalCurrentPage)
      emitChange()
    }

    const next = () => {
      if (props.disabled) return
      const newVal = internalCurrentPage.value + 1
      internalCurrentPage.value = getValidCurrentPage(newVal)
      emit('next-click', internalCurrentPage)
      emitChange()
    }

    watchEffect(() => {
      internalCurrentPage.value = getValidCurrentPage(props.currentPage)
    })

    watchEffect(() => {
      internalPageSize.value = isNaN(props.pageSize) ? 10 : props.pageSize
    })

    watchEffect(() => {
      emit('update:currentPage', internalCurrentPage.value)
      lastEmittedPage.value = -1
    })

    provide<RPagination>('pagination', {
      pageCount: computed(() => props.pageCount),
      disabled: computed(() => props.disabled),
      currentPage: computed(() => internalCurrentPage.value),
      changeEvent: handleCurrentChange,
      handleSizesChange,
    })

    return {
      internalCurrentPage,
      internalPageCount,
      handleCurrentChange,
      handleSizesChange,
      prev,
      next,
    }
  },
  render() {
    const layout = this.layout

    if (!layout) return null
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null

    const rootNode = h('div', {
      class: ['rol-pagination', { 'is-background': this.background, 'rol-pagination--small': this.small }],
    })
    const rootChildren = []
    const rightWrapperRoot = h('div', { class: 'rol-pagination__rightwrapper' })
    const rightWrapperChildren = []
    const TEMPLATE_MAP = {
      prev: h(Prev, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
        onClick: this.prev,
      }),
      jumper: h(Jumper),
      next: h(Next, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
        onClick: this.next,
      }),
      pager: h(Pager, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
        onChange: this.handleCurrentChange,
        disabled: this.disabled,
      }),
      total: h(Total, { total: this.total }),
      sizes: h(Sizes, {
        pageSize: this.pageSize,
        pageSizes: this.pageSizes,
        popperClass: this.popperClass,
        disabled: this.disabled,
      }),
      slot: this.$slots?.default?.() ?? null,
    }

    const components = layout.split(',').map((item: string) => item.trim())

    let haveRightWrapper = false

    components.forEach((component: keyof typeof TEMPLATE_MAP | '->') => {
      if (component === '->') {
        haveRightWrapper = true
        return
      }

      if (!haveRightWrapper) {
        rootChildren.push(TEMPLATE_MAP[component])
      } else {
        rightWrapperChildren.push(TEMPLATE_MAP[component])
      }

      if (haveRightWrapper) {
        rootChildren.unshift(rightWrapperRoot)
      }
    })

    return h(rootNode, {}, [rootChildren])
  },
})
