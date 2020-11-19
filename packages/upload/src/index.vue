<template>
  <input type="file" @change="handleChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Uppy from '@uppy/core'
import XHRUpload, { XHRUploadOptions } from '@uppy/xhr-upload'

export default defineComponent({
  name: 'RolUpload',
  setup() {
    // const input = ref<Nullable<HTMLInputElement>>(null)
    const uppy = Uppy().use(XHRUpload, {
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      formData: true,
      fieldName: 'files[]',
    } as XHRUploadOptions)

    const handleChange = (event: InputEvent) => {
      const files = Array.from((event.target as HTMLInputElement).files)
      files.forEach(file => {
        uppy.addFile({
          source: 'file input',
          name: file.name,
          type: file.type,
          data: file,
        })
      })
      uppy
        .upload()
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    }

    return {
      handleChange,
    }
  },
})
</script>

<style>
</style>
