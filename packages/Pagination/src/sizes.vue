<template>
  <span class="rol-pagination__sizes">
    <rol-select
      :model-value="innerPageSize"
      :disabled="disabled"
      :popper-class="popperClass"
      size="mini"
      @change="handleChange"
    >
      <rol-select-option
        v-for="item in innerPagesizes"
        :key="item"
        :value="item"
        :label="item + '条/页'"
      ></rol-select-option>
    </rol-select>
  </span>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch, computed } from 'vue'
import { Select as RolSelect, SelectOption as RolSelectOption } from '@rol-ui/select'
import { isEqual } from 'lodash'

export default defineComponent({
  name: 'RolSizes',
  components: {
    RolSelect,
    RolSelectOption,
  },
  props: {
    pageSize: Number,
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      },
    },
    popperClass: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  emits: ['page-size-change'],
  setup(props, { emit }) {
    const pagination = inject<RPagination>('pagination', {})
    const innerPageSize = ref<Nullable<number>>(props.pageSize)

    watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return
        if (Array.isArray(newVal)) {
          const pageSize = newVal.indexOf(props.pageSize) > -1 ? props.pageSize : props.pageSizes[0]
          emit('page-size-change', pageSize)
        }
      },
    )

    const innerPagesizes = computed(() => props.pageSizes)

    const handleChange = (val: number) => {
      if (val !== innerPageSize.value) {
        innerPageSize.value = val
        pagination?.handleSizesChange(Number(val))
      }
    }

    return {
      innerPagesizes,
      innerPageSize,
      handleChange,
    }
  },
})
</script>

<style></style>
