<script lang="ts">
import { h, inject } from 'vue'
import { RBreadcrumbProvide } from './index.vue'
export default {
  name: 'RolBreadcrumbItem',
  setup(props, { slots }) {
    const { separatorIns } = inject<RBreadcrumbProvide>('rootBreadcrumb')

    const separator = h('span', { class: 'rol-breadcrumb__separator', role: 'presentation' }, separatorIns)
    const content = h('span', { class: 'rol-breadcrumb__item' }, [slots?.default()])

    return () => {
      return h('li', {}, [separator, content])
    }
  },
}
</script>

<style></style>
