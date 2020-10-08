import { ComponentPublicInstance, defineComponent, ref, VNode } from 'vue'
import RolPopper from '@rol-ui/popper'

export default defineComponent({
  name: 'RolDropdown',
  components: {
    RolPopper,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    effect: {
      type: String,
      default: 'light',
    },
  },
  setup(props) {
    const triggerVnode = ref<Nullable<VNode>>(null)
    const caretButton = ref<Nullable<ComponentPublicInstance>>(null)

  },
})
