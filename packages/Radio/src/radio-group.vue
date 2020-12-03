<template>
  <div ref="radioGroup" class="rol-raido-group" role="radiogroup" @keydown="handleKeydown">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { RRadioSize } from '@rol-ui/radio/src/radio'
import { radioGroupKey } from '@rol-ui/radio/src/useRadio'
import { EVENT_CODE } from '@rol-ui/utils/aria'
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { defineComponent, nextTick, PropType, provide, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'RolRadioGroup',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    size: {
      type: String as PropType<RRadioSize>,
      default: 'normal',
      validator: (val: string) => {
        return ['small', 'normal', 'medium'].includes(val)
      },
    },
    fill: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  emits: [UPDATE_MODELVALUE_EVENT, 'change'],
  setup(props, { emit }) {
    const radioGroup = ref<Nullable<HTMLDivElement>>(null)

    const changeEvent = value => {
      emit(UPDATE_MODELVALUE_EVENT, value)
      nextTick(() => {
        emit('change', value)
      })
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = radioGroup.value.querySelectorAll(className)
      const length = radios.length
      const index = Array.from(radios).indexOf(target)
      const roleRadios = radioGroup.value.querySelectorAll('[role=radio]')
      let nextIndex = null
      switch (event.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.right:
          event.stopPropagation()
          event.preventDefault()
          nextIndex = index === 0 ? length - 1 : index - 1
          break
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          event.stopPropagation()
          event.preventDefault()
          nextIndex = index === length - 1 ? 0 : index + 1
          break
        default:
          break
      }
      if (nextIndex === null) return
      ;(roleRadios[nextIndex] as HTMLElement).click()
      ;(roleRadios[nextIndex] as HTMLElement).focus()
    }

    provide(
      radioGroupKey,
      reactive({
        name: 'RolRadioGroup',
        ...toRefs(props),
        radioGroupSize: props.size,
        changeEvent: changeEvent,
      }),
    )

    return {
      radioGroup,
      handleKeydown,
    }
  },
})
</script>

<style>
</style>
