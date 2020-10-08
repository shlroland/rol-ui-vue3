<template>
  <div class="rol-collapse" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, PropType, provide, Ref, ref, watch } from 'vue'
import mitt, { Emitter } from 'mitt'
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'

export interface CollapseProvider {
  activeNames: Ref
  collapseMitt: Emitter
}

export default defineComponent({
  name: 'RolCollapse',
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number] as PropType<string | number | Array<string | number>>,
      default: () => [],
    },
  },
  emits: [UPDATE_MODELVALUE_EVENT],
  setup(props, { emit }) {
    const activeNames = ref([].concat(props.modelValue))
    const collapseMitt: Emitter = mitt()

    const setActiveNames = (_activeNames: string | number | Array<string | number>) => {
      activeNames.value = [].concat(_activeNames)
      const value = props.accordion ? activeNames.value[0] : activeNames.value
      emit(UPDATE_MODELVALUE_EVENT, value)
    }

    const handleItemClick = (name: string | number) => {
      if (props.accordion) {
        setActiveNames(
          (activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name ? '' : name,
        )
      } else {
        let _activeNames = activeNames.value.concat()
        const index = _activeNames.indexOf(name)

        if (index > -1) {
          _activeNames.splice(index, 1)
        } else {
          _activeNames.push(name)
        }
        setActiveNames(_activeNames)
      }
    }

    collapseMitt.on('item-click', handleItemClick)

    onUnmounted(() => {
      collapseMitt.all.clear()
    })

    watch(
      () => props.modelValue,
      () => {
        activeNames.value = [].concat(props.modelValue)
      },
    )
    provide('collapse', {
      activeNames,
      collapseMitt,
    })

    return {
      activeNames,
      setActiveNames,
      handleItemClick,
    }
  },
})
</script>
