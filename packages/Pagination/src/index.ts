import { defineComponent, h } from 'vue'
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
  //   setup(props, { emit }) {},
  render() {
    const layout = this.layout

    if (!layout) return null

    const rootNode = h('div', {
      class: ['rol-pagination', { 'is-background': this.background, 'rol-pagination--small': this.small }],
    })
    const rootChildren = []
    const TEMPLATE_MAP = {
      prev: h(Prev),
      //   jumper: h(Jumper),
      next: h(Next),
      pager: h(Pager),
    }

    const components = layout.split(',').map((item: string) => item.trim())

    components.forEach((component: keyof typeof TEMPLATE_MAP | '->') => {
      rootChildren.push(TEMPLATE_MAP[component])
    })

    return h(rootNode, {}, [rootChildren])
  },
})
