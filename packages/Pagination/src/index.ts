import { computed, defineComponent, h, nextTick, ref, watchEffect } from 'vue'
import Prev from './prev.vue'
import Next from './next.vue'
import Pager from './pager.vue'

export default defineComponent({
  name: 'RolPagination',
  components: {
    Prev,
    Next,
    Pager,
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
  emits: ['current-change'],
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

    watchEffect(() => {
      internalCurrentPage.value = getValidCurrentPage(props.currentPage)
    })

    watchEffect(() => {
      internalPageSize.value = isNaN(props.pageSize) ? 10 : props.pageSize
    })

    return {
      internalCurrentPage,
      internalPageCount,
      handleCurrentChange,
    }
  },
  render() {
    const layout = this.layout

    if (!layout) return null

    const rootNode = h('div', {
      class: ['rol-pagination', { 'is-background': this.background, 'rol-pagination--small': this.small }],
    })
    const rootChildren = []
    const TEMPLATE_MAP = {
      prev: h(Prev, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
      }),
      //   jumper: h(Jumper),
      next: h(Next, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
      }),
      pager: h(Pager, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
        onChange: this.handleCurrentChange,
        disabled: this.disabled,
      }),
    }

    const components = layout.split(',').map((item: string) => item.trim())

    components.forEach((component: keyof typeof TEMPLATE_MAP | '->') => {
      rootChildren.push(TEMPLATE_MAP[component])
    })

    return h(rootNode, {}, [rootChildren])
  },
})
