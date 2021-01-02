<template>
  <rol-popper
    ref="triggerVnode"
    v-model:visible="visible"
    :placement="placement"
    :effect="effect"
    :trigger="[trigger]"
    pure
    manual-mode
    append-to-body
    popper-class="rol-dropdown__popper"
    transition="rol-zoom-in-top"
  >
    <template #default>
      <slot name="dropdown"></slot>
    </template>
    <template #trigger>
      <slot v-if="!splitButton" name="default"></slot>
      <template v-else>
        <rol-button-group>
          <rol-button :size="dropdownSize" :type="type" @click="handlerMainButtonClick">
            <slot name="default"></slot>
          </rol-button>
          <rol-button :size="dropdownSize" :type="type" class="rol-dropdown__caret-button">
            <span class="rol-dropdown__icon">
              <rol-icon name="chevron-down"></rol-icon>
            </span>
          </rol-button>
        </rol-button-group>
      </template>
    </template>
  </rol-popper>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch, ref, getCurrentInstance, provide } from 'vue'
import RolPopper from '@rol-ui/popper'
import { Button as RolButton, ButtonGroup as RolButtonGroup } from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'
import { addClass, on, removeClass } from '@rol-ui/utils/dom'

export default defineComponent({
  name: 'RolDropdown',
  components: {
    RolPopper,
    RolButtonGroup,
    RolIcon,
    RolButton,
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
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const visible = ref(false)
    const _instance = getCurrentInstance()
    const timeout = ref<Nullable<number>>(null)
    const focusing = ref(false)

    const triggerVnode = ref<Nullable<ComponentPublicInstance>>(null)

    const dropdownSize = computed(() => props.size)

    const triggerElm = computed<Nullable<HTMLButtonElement>>(() => {
      const _: any = (triggerVnode.value?.$refs.triggerRef as HTMLElement)?.children[0] ?? {}
      return !props.splitButton ? _ : _.children?.[1]
    })

    const handleClick = () => {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    const show = () => {
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        props.trigger === 'click' ? 0 : props.showTimeout,
      )
    }

    const hide = () => {
      if (triggerElm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerElm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        props.trigger === 'click' ? 0 : props.hideTimeout,
      )
    }

    const removeTabindex = () => {
      triggerElm.value?.setAttribute('tabindex', '-1')
    }

    const resetTabindex = ele => {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    const triggerElmFocus = () => {
      triggerElm.value?.focus?.()
    }

    const triggerElmBlur = () => {
      triggerElm.value?.blur?.()
    }

    const commandHandler = (...args) => {
      emit('command', ...args)
    }

    const handlerMainButtonClick = event => {
      emit('click', event)
      hide()
    }

    provide('rolDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerElm,
    })

    watch(visible, val => {
      if (val) triggerElmFocus()
      if (!val) triggerElmBlur()
      emit('visible-change', val)
    })

    watch(focusing, val => {
      const selfDefine = triggerElm.value
      if (selfDefine) {
        if (val) {
          addClass(selfDefine, 'focusing')
        } else {
          removeClass(selfDefine, 'focusing')
        }
      }
    })

    onMounted(() => {
      if (!props.splitButton) {
        on(triggerElm.value, 'focus', () => {
          focusing.value = true
        })
        on(triggerElm.value, 'blur', () => {
          focusing.value = false
        })
        on(triggerElm.value, 'click', () => {
          focusing.value = false
        })
      }

      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      }

      Object.assign(_instance, {
        handleClick,
        hide,
        resetTabindex,
      })
    })

    return {
      visible,
      dropdownSize,
      handlerMainButtonClick,
      triggerVnode,
    }
  },
})
</script>
