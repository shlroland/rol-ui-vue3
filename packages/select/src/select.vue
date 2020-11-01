<template>
  <div ref="selectWrapper" class="rol-select" :class="[selectSize ? `rol-select--${selectSize}` : '']">
    <Popper
      ref="popper"
      v-model:visible="dropMenuVisible"
      placement="bottom-start"
      :show-arrow="true"
      :append-to-body="popperAppendToBody"
      pure
      manual-mode
      effect="light"
      trigger="click"
      :offset="6"
    >
      <template #trigger>
        <div class="select-trigger">
          <rol-input
            ref="referebce"
            v-model="selectedLabel"
            type="text"
            :placeholder="currentPlaceholder"
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            :tabindex="multiple && filterable ? '-1' : null"
          >
            <template v-if="$slots.prefix" #prefix>
              <slot name="prefix"></slot>
            </template>
            <template #suffix>
              <rol-icon
                v-show="!showClose"
                :class="['rol-select__caret', 'rol-input__icon']"
                :name="iconClass"
              ></rol-icon>
            </template>
          </rol-input>
        </div>
      </template>

      <template #default>
        <transition name="rol-zoom-in-top">
          <rol-select-dropdown v-show="visible" ref="popper">
            <rol-scrollbar
              v-show="options.length > 0"
              ref="scrollbar"
              tag="ul"
              wrap-class="el-select-dropdown__wrap"
              view-class="el-select-dropdown__list"
              :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
            ></rol-scrollbar>
          </rol-select-dropdown>
        </transition>
      </template>
    </Popper>
  </div>
</template>

<script lang="ts">
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { defineComponent, provide, reactive, toRefs } from 'vue'
import { useSelect, useSelectStates } from './useSelect'
import Popper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'
import RolIcon from '@rol-ui/icon'
import RolSelectDropdown from './select-dropdown.vue'
import RolScrollbar from '@rol-ui/scrollbar'
import { selectKey } from './token'

export default defineComponent({
  name: 'RolSelect',
  components: {
    Popper,
    RolInput,
    RolIcon,
    RolSelectDropdown,
    RolScrollbar,
  },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number],
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'medium', 'small', 'mini'].includes(val)
      },
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['remove-tag', 'clear', 'change', 'visible-change', 'focus', 'blur', UPDATE_MODELVALUE_EVENT],
  setup(props, ctx) {
    const states = useSelectStates(props)

    const {
      selectSize,
      dropMenuVisible,
      selectDisabled,
      showClose,
      iconClass,
      popper,
      selectWrapper,
      handleOptionSelect,
      onOptionDestroy,
      readonly,
    } = useSelect(props, states, ctx)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
    } = toRefs(states)

    provide(
      selectKey,
      reactive({
        options,
        cachedOptions,
        optionsCount,
        filteredOptionsCount,
        hoverIndex,
        handleOptionSelect,
        selectEmitter: states.selectEmitter,
        onOptionDestroy,
        props,
        inputWidth,
        selectWrapper,
        popper,
      }),
    )

    return {
      selectSize,
      selectDisabled,
      dropMenuVisible,
      showClose,
      iconClass,
      popper,
      readonly,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
    }
  },
})
</script>

<style></style>
