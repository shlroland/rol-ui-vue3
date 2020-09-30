import { defineComponent } from 'vue'
import defaultProps from './core/props'

export default defineComponent({
  name: 'RolPopper',
  props: defaultProps,
  emits: ['update:visible', 'after-enter', 'after-leave'],
})
