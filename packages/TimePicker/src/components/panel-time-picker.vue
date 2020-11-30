<template>
  <rol-popper
    ref="popper"
    v-model:visible="pickerVisible"
    manual-mode
    effect="light"
    trigger="click"
    popper-class="rol-picker__popper"
    :stop-popper-mouse-event="false"
  >
    <template #trigger>
      <rol-input v-if="!isRangeInput" ref="refContainer"></rol-input>
    </template>
  </rol-popper>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { OutSideClick } from '@rol-ui/directives'
import RolPopper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'

export default defineComponent({
  name: 'Picker',
  components: {
    RolPopper,
    RolInput,
  },
  directives: { clickoutside: OutSideClick },
  props: {
    name: {
      type: [Array, String],
      default: '',
    },
    format: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
    editable: {
      type: Boolean,
      default: true,
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Date, Array, String] as PropType<string | Date | Date[]>,
      default: '',
    },
    rangeSeparator: {
      type: String,
      default: '-',
    },
    startPlaceholder: String,
    endPlaceholder: String,
    defaultValue: {
      type: [Date, Array] as PropType<Date | Date[]>,
    },
    defaultTime: {
      type: [Date, Array] as PropType<Date | Date[]>,
    },
    isRange: {
      type: Boolean,
      default: false,
    },
    disabledHours: {
      type: Function,
    },
    disabledMinutes: {
      type: Function,
    },
    disabledSeconds: {
      type: Function,
    },
    disabledDate: {
      type: Function,
    },
    cellClassName: {
      type: Function,
    },
    shortcuts: {
      type: Array,
      default: () => [],
    },
    arrowControl: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const pickerVisible = ref(false)
    const valueOpen = ref(null)

    const isRangeInput = computed(() => {
      return props.type.indexof('range') > -1
    })

    const onClickOutside = () => {
      //1111
    }

    return {
      pickerVisible,
      isRangeInput,
      onClickOutside,
    }
  },
})
</script>

<style></style>
