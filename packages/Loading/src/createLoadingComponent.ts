import { removeClass } from '@rol-ui/utils/dom'
import { createVNode, defineComponent, h, reactive, ref, render, toRefs, Transition, VNode } from 'vue'
import type { RLoadingCreateComponentParams, RLoadingInstance } from './types'
import RolIcon from '@rol-ui/icon'

export const createLoadingComponent = ({
  options,
  globalLoadingOption,
}: RLoadingCreateComponentParams): RLoadingInstance => {
  let vm: VNode = null
  let afterLeaveTimer: Nullable<number> = null
  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: options.hasOwnProperty('visible') ? options.visible : true,
  })

  const setText = (text: string) => {
    data.text = text
  }

  const destorySelf = () => {
    const target = data.parent

    if (!target.vLoadingAddClassList) {
      removeClass(target, 'rol-loading-parent--relative')
      removeClass(target, 'rol-loading-parent--hidden')
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el)
    }
  }

  const close = () => {
    const target = data.parent
    target.vLoadingAddClassList = null

    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = undefined
    }
    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)
    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false
        destorySelf()
      }
    }, 400)
    data.visible = false
  }

  const handleAfterLeave = () => {
    if (!afterLeaveFlag.value) return
    afterLeaveFlag.value = false
    destorySelf()
  }

  const componetSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave,
  }

  const RolLoadingComponent = defineComponent({
    name: 'RolLoading',
    components: {
      RolIcon,
    },
    setup() {
      return componetSetupConfig
    },
    render() {
      const spinner = h(
        'svg',
        {
          class: 'circular',
          viewBox: '25 25 50 50',
        },
        [h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' })],
      )

      const noSpinner = h(RolIcon, { class: 'circular', name: this.spinner, spin: true })

      const spinnerText = h('p', { class: 'rol-loading-text' }, [this.text])
      return h(
        Transition,
        {
          name: 'rol-loading-fade',
          onAfterLeave: this.handleAfterLeave,
        },
        {
          default: () =>
            h(
              'div',
              {
                style: {
                  backgroundColor: this.background || '',
                  display: this.visible ? 'inherit' : 'none',
                },
                class: ['rol-loading-mask', this.customClass, this.fullscreen ? 'is-fullscreen' : ''],
              },
              [
                h(
                  'div',
                  {
                    class: 'rol-loading-spinner',
                  },
                  [!this.spinner ? spinner : noSpinner, this.text ? spinnerText : null],
                ),
              ],
            ),
        },
      )
    },
  })
  vm = createVNode(RolLoadingComponent)

  render(vm, document.createElement('div'))

  return {
    ...componetSetupConfig,
    vm,
    get $el() {
      return vm.el as HTMLElement
    },
  }
}
