<template>
  <li
    v-show="visible"
    :class="[
      'rol-select-dropdown__item',
      {
        hover: hover,
        selected: itemSelected,
        'is-disabled': isDisabled,
      },
    ]"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
      <rol-icon v-show="itemSelected" name="check"></rol-icon>
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onBeforeUnmount, reactive, toRefs } from 'vue'
import { useOption } from './useOptions'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolSelectOption',
  components: { RolIcon },
  props: {
    value: {
      required: true,
      type: [String, Number, Object],
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
    })

    const { currentLabel, select, itemSelected, isDisabled } = useOption(props, states)

    const { visible, hover } = toRefs(states)

    const vm = getCurrentInstance().proxy

    onBeforeUnmount(() => {
      const { selected, multiple } = select
      let selectedOptions = multiple ? selected : [selected]

      let index = select.cachedOptions.indexOf(vm)
      let selectedIndex = selectedOptions?.indexOf(vm)
      //   if option is not selected, remove it from cache
      if (index > -1 && selectedIndex < 0) {
        select.cachedOptions.splice(index, 1)
      }
    })
    select.cachedOptions.push(vm)
    select.options.push(vm)

    const selectOptionClick = () => {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true)
      }
    }

    return {
      currentLabel,
      visible,
      hover,
      itemSelected,
      selectOptionClick,
      isDisabled,
    }
  },
})
</script>
