<template>
  <div
    :class="['rol-upload', `rol-upload--${listType}`]"
    tabindex="0"
    @click="handleClick"
    @keydown.self.enter.space="handleKeydown"
  >
    <!-- <template> -->
    <slot></slot>
    <!-- </template> -->
    <input
      ref="inputRef"
      class="rol-upload__input"
      type="file"
      :name="name"
      :multiple="multiple"
      :accept="acceptArr"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { NOOP } from '@vue/shared'
import { ListType } from './upload'

export default defineComponent({
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'file',
    },
    accept: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    disabled: Boolean,
    listType: {
      type: String as PropType<ListType>,
      default: 'text',
    },
    addFile: {
      type: Function as PropType<(files: File[]) => void>,
      default: NOOP,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const inputRef = ref(null as Nullable<HTMLInputElement>)

    const acceptArr = computed(() => {
      if (Array.isArray(props.accept)) {
        return props.accept.join(',')
      }
      return props.accept
    })

    const handleChange = (event: InputEvent) => {
      const files = Array.from((event.target as HTMLInputElement).files)
      props.addFile(files)
    }

    const handleClick = () => {
      if (!props.disabled) {
        inputRef.value.value = null
        inputRef.value.click()
      }
    }

    const handleKeydown = () => {
      handleClick()
    }

    return {
      handleClick,
      handleKeydown,
      handleChange,
      inputRef,
      acceptArr,
    }
  },
})
</script>

<style></style>
