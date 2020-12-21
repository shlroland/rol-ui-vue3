<script lang="ts">
import { h, inject, onMounted, getCurrentInstance } from 'vue'
import { RBreadcrumbProvide } from './index.vue'

export default {
  name: 'RolBreadcrumbItem',
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    replace: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { separatorIns } = inject<RBreadcrumbProvide>('rootBreadcrumb')
    const instance = getCurrentInstance()
    const router = instance.appContext.config.globalProperties.$router
    // onMounted(() => {
    //   link.value.setAttribute('role', 'link')
    //   link.value.addEventListener('click', () => {
    //     if (!props.to) return
    //     const router = useRouter()
    //     if (!router) return
    //     props.replace ? router.replace(props.to) : router.push(props.to)
    //   })
    // })

    const handleLink = () => {
      if (!router || !props.to) return
      props.replace ? router.replace(props.to) : router.push(props.to)
    }

    return {
      separatorIns,
      handleLink,
    }
  },
  render() {
    const { separatorIns, $slots, to, handleLink } = this
    const separator = h('span', { class: 'rol-breadcrumb__separator', role: 'presentation' }, separatorIns)
    const content = h(
      'span',
      {
        class: ['rol-breadcrumb__item', to ? 'is-link' : null],
        role: 'link',
        onClick: () => {
          handleLink()
        },
      },
      [$slots?.default()],
    )

    return h('li', {}, [separator, content])
  },
}
</script>
