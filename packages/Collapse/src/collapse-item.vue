<template>
  <div
    class="rol-collapse-item"
    :class="{
      'is-active': isActive,
      'is-disabled': disabled,
    }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`rol-collapse-content-${id}`"
      :aria-describedby="`rol-collapse-content-${id}`"
    >
      <div
        :id="`rol-collapse-head-${id}`"
        class="rol-collapse-item__header"
        role="button"
        :tabindex="disabled ? -1 : 0"
        :class="{
          focusing: focusing,
          'is-active': isActive,
        }"
        @click="handleHeaderClick"
        @keyup.space.enter="handleHeaderClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <Icon :class="['rol-collapse-item__arrow', { 'is-active': isActive }]" name="chevron-right" />
      </div>
    </div>
    <CollapseTransition>
      <div
        v-show="isActive"
        :id="`rol-collapse-content-${id}`"
        class="rol-collapse-item__wrap"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`rol-collapse-head-${id}`"
      >
        <div class="rol-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue'
import { CollapseProvider } from './collapse.vue'
import { generateId } from '@rol-ui/utils/util'
import Icon from '@rol-ui/icon'
import CollapseTransition from './transtion'
export default defineComponent({
  name: 'RolCollapseItem',
  components: {
    Icon,
    CollapseTransition,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: [String, Number] as PropType<string | number>,
      default: () => {
        return generateId()
      },
    },
    disabled: Boolean,
  },
  setup(props) {
    const collapse = inject<CollapseProvider>('collapse')
    const collapseMitt = collapse?.collapseMitt
    const id = ref(generateId())
    const focusing = ref(false)
    const isClick = ref(false)

    const isActive = computed(() => {
      return collapse?.activeNames.value.indexOf(props.name) > -1
    })

    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true
        } else {
          isClick.value = false
        }
      }, 50)
    }

    const handleHeaderClick = () => {
      if (props.disabled) return
      collapseMitt?.emit('item-click', props.name)
      focusing.value = false
      isClick.value = true
    }

    const handleEnterClick = () => {
      collapseMitt?.emit('item-click', props.name)
    }

    return {
      isActive,
      id,
      focusing,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
    }
  },
})
</script>
