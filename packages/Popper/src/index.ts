import { defineComponent } from 'vue'
import { UPDATE_VISIBLE_EVENT } from './core'
import defaultProps from './core/props'

export default defineComponent({
  name: 'RolPopper',
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave'],
})
