<template>
  <div :class="['rol-upload',`rol-upload--${listType}`]">
    <template>
      <slot></slot>
    </template>
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
import { defineComponent, ref } from 'vue'
import { uploadProps } from './useUpload'
import Uppy from '@uppy/core'

export default defineComponent({
  props: uploadProps,
  setup(props) {
    const inputRef = ref(null as Nullable<HTMLInputElement>)
    const uppy = Uppy({ restrictions: { allowedFileTypes: ['.jpg', '.jpeg', '.png', '.gif'] } })

    const handleChange = (event: InputEvent) => {
      const files = Array.from((event.target as HTMLInputElement).files)
      files.forEach(file => {
        try {
          uppy.addFile({
            source: 'file input',
            name: file.name,
            type: file.type,
            data: file,
          })
          console.log(uppy.getFiles())
        } catch (err) {
          if (err.isRestriction) {
            // handle restrictions
            console.log('Restriction error:', err)
          } else {
            // handle other errors
            console.error(err)
          }
        }
      })
    }

    return {
      handleChange,
      inputRef,
    }
  },
})
</script>

<style>
</style>
