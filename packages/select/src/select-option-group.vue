<template>
  <ul v-show="visible" class="rol-select-group__wrap">
    <li class="rol-select-group__title">{{ label }}</li>
    <li>
      <ul class="rol-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject, provide, reactive, ref, toRefs } from 'vue'
import { selectEvents, selectGroupKey, selectKey } from './token'

export default defineComponent({
  name: 'RolOptionGroup',
  componentName: 'RolOptionGroup',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const visible = ref(true)

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      }),
    )

    const select = inject(selectKey)

    const queryChange = () => {
      visible.value = select?.options?.some((option: any) => option.visible === true)
    }
    select.selectEmitter.on(selectEvents.groupQueryChange, queryChange)

    return {
      visible,
    }
  },
})
</script>

<style></style>
