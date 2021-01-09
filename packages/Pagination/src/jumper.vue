<template>
  <span class="rol-pagination__jump">
    前往
    <rol-input
      v-model:modelValue="userInput"
      class="rol-pagination__editor is-in-pagination"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      type="number"
      @change="handleChange"
    ></rol-input>
    页
  </span>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { RPagination } from './pagination.d.ts'
import RolInput from '@rol-ui/input'

export default defineComponent({
  name: 'RolJumper',
  components: {
    RolInput,
  },
  setup() {
    const pagination = inject<RPagination>('pagination', {})
    const userInput = ref<Nullable<number>>(pagination.currentPage.value ?? 0)
    // const innerValue = computed(() => userInput.value ?? )
    const handleChange = val => {
      pagination?.changeEvent(Number(val))
    }
    return {
      userInput,
      pageCount: pagination.pageCount,
      disabled: pagination.disabled,
      handleChange,
    }
  },
})
</script>

<style></style>
