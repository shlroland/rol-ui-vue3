<template>
  <div
    :class="['rol-upload',`rol-upload--${listType}`]"
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
      :accept="accept"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
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
      type: String,
      default: '',
    },
    disabled: Boolean,
    listType: {
      type: String as PropType<ListType>,
      default: 'text',
    },
    addFile: {
      type: Function as PropType<(file: File) => void>,
      default: NOOP,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const inputRef = ref(null as Nullable<HTMLInputElement>)

    const handleChange = (event: InputEvent) => {
      const files = Array.from((event.target as HTMLInputElement).files)
      files.forEach(file => {
        try {
          props.addFile(file)
        } catch (err) {
          if (err.isRestriction) {
            // handle restrictions
            console.warn('Restriction error:', err)
          } else {
            // handle other errors
            console.error(err)
          }
        }
      })
      emit('change')
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
    }
  },
})
</script>

<style>
</style>
