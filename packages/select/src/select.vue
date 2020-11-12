<template>
  <div
    ref="selectWrapper"
    v-outSideClick="handleClose"
    class="rol-select"
    :class="[selectSize ? `rol-select--${selectSize}` : '']"
    @click.stop="toggleMenu"
  >
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
      popper-class="rol-select-popper"
      :offset="6"
    >
      <template #trigger>
        <div class="select-trigger">
          <div
            v-if="multiple"
            ref="tags"
            class="rol-select__tags"
            :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
          >
            <span v-if="collapseTags && selected.length">
              <rol-tag
                :closable="!selectDisabled"
                :hit="selected[0].hitState"
                :size="collapseTagSize"
                disable-transitions
                @close="deleteTag($event, selected[0])"
              >
                <span class="rol-select__tags-text">{{ selected[0].currentLabel }}</span>
              </rol-tag>
              <rol-tag v-if="selected.length > 1" :closable="false" :size="collapseTagSize" disable-transitions>
                <span class="rol-select__tags-text">+ {{ selected.length - 1 }}</span>
              </rol-tag>
            </span>
            <transition-group v-if="!collapseTags" @after-leave="resetInputHeight">
              <rol-tag
                v-for="item in selected"
                :key="getValueKey(item)"
                :closable="!selectDisabled"
                :hit="item.hitState"
                :size="collapseTagSize"
                disable-transitions
                @close="deleteTag($event, selected[0])"
              >
                <span class="rol-select__tags-text">{{ item.currentLabel }}</span>
              </rol-tag>
            </transition-group>
            <input
              v-if="filterable"
              ref="input"
              v-model="query"
              type="text"
              class="rol-select__input"
              :class="[selectSize ? `is-${selectSize}` : '']"
              :disabled="selectDisabled"
              :autocomplete="autocomplete"
              :style="{
                'flex-grow': '1',
                width: inputLength / (inputWidth - 32) + '%',
                'max-width': inputWidth - 42 + 'px',
              }"
              @focus="handleFocus"
              @blur="softFocus = false"
              @input="debouncedQueryChange"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
            />
          </div>
          <rol-input
            :id="id"
            ref="reference"
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
            @focus="handleFocus"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @keydown.esc.stop.prevent="visible = false"
            @keydown.tab="visible = false"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <slot name="prefix"></slot>
            </template>
            <template #suffix>
              <rol-icon
                v-if="showClose"
                class="rol-select__caret rol-input__icon"
                :name="clearIcon"
                @click="handleClearClick"
              ></rol-icon>
              <rol-icon
                v-if="!showClose && iconClass"
                :class="['rol-select__caret', 'rol-input__icon', { 'is-reverse': visible }]"
                :name="iconClass"
              ></rol-icon>
            </template>
          </rol-input>
        </div>
      </template>

      <template #default>
        <transition name="rol-zoom-in-top">
          <rol-select-dropdown v-show="visible">
            <rol-scrollbar
              v-show="options.length > 0"
              ref="scrollbar"
              tag="ul"
              wrap-class="rol-select-dropdown__wrap"
              view-class="rol-select-dropdown__list"
              :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
            >
              <rol-option v-if="showNewOption" :value="query" :created="true" />
              <slot></slot>
            </rol-scrollbar>
            <template v-if="emptyText && (!allowCreate || loading || (allowCreate && options.length === 0))">
              <slot v-if="$slots.empty" name="empty"></slot>
              <p v-else class="rol-select-dropdown__empty">
                {{ emptyText }}
              </p>
            </template>
          </rol-select-dropdown>
        </transition>
      </template>
    </Popper>
  </div>
</template>

<script lang="ts">
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import {
  defineComponent,
  onMounted,
  PropType,
  provide,
  reactive,
  toRefs,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
} from 'vue'
import { useSelect, useSelectStates } from './useSelect'
import Popper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'
import RolIcon, { IconProps } from '@rol-ui/icon'
import RolSelectDropdown from './select-dropdown.vue'
import RolOption from './select-option.vue'
import RolScrollbar from '@rol-ui/scrollbar'
import RolTag from '@rol-ui/tag'
import { selectKey } from './token'
import { OutSideClick } from '@rol-ui/directives'
import { RSelectInternalInstance } from './type'
import { addResizeListener, removeResizeListener } from '@rol-ui/utils/resize-event'

export default defineComponent({
  name: 'RolSelect',
  components: {
    Popper,
    RolInput,
    RolIcon,
    RolSelectDropdown,
    RolScrollbar,
    RolOption,
    RolTag,
  },
  directives: { OutSideClick },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number],
      required: true,
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
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
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
    clearIcon: {
      type: [Object, Array, String] as PropType<IconProps>,
      default: ['far', 'times-circle'],
    },
  },
  emits: ['remove-tag', 'clear', 'change', 'visible-change', 'focus', 'blur', UPDATE_MODELVALUE_EVENT],
  setup(props, ctx) {
    const states = useSelectStates(props)
    const instance = getCurrentInstance() as RSelectInternalInstance

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
      handleFocus,
      toggleMenu,
      reference,
      input,
      showNewOption,
      handleClose,
      setSelected,
      handleClearClick,
      tags,
      getValueKey,
      collapseTagSize,
      resetInputHeight,
      deleteTag,
      debouncedOnInputChange,
      debouncedQueryChange,
      handleComposition,
      handleResize,
      emptyText,
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
        selected,
        multiple: props.multiple,
        remote: props.remote,
        setSelected,
        valueKey: props.valueKey,
        instance,
      }),
    )

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = ''
      }
      addResizeListener(selectWrapper.value as any, handleResize)
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          medium: 36,
          small: 32,
          mini: 28,
        }
        const input = reference.value.$el
        states.initialInputHeight = input.getBoundingClientRect().height || sizeMap[selectSize.value]
      }
      nextTick(() => {
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
      })
      setSelected()
    })

    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value as any, handleResize)
    })

    if (props.multiple && !Array.isArray(props.modelValue)) {
      console.log('created')
      ctx.emit(UPDATE_MODELVALUE_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODELVALUE_EVENT, '')
    }

    return {
      selectSize,
      selectDisabled,
      dropMenuVisible,
      showClose,
      iconClass,
      popper,
      readonly,
      toggleMenu,
      handleClose,
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
      handleFocus,
      reference,
      input,
      selectWrapper,
      showNewOption,
      handleClearClick,
      tags,
      getValueKey,
      collapseTagSize,
      resetInputHeight,
      deleteTag,
      debouncedOnInputChange,
      debouncedQueryChange,
      handleComposition,
      emptyText,
    }
  },
})
</script>

<style></style>
