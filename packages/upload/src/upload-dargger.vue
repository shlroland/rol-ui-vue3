<template>
  <div
    :class="{
      'rol-upload-dragger': true,
      'is-dragover': dragover,
    }"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'RolUploadDrag',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['file'],
  setup(props, { emit }) {
    const dragover = ref(false)
    const uploader = inject<{ accept: string | string[] }>('uploader')

    const onDragover = () => {
      if (!props.disabled) dragover.value = true
    }

    const onDrop = (event: DragEvent) => {
      event.preventDefault()
      if (props.disabled || !uploader) return
      const accept = Array.isArray(uploader.accept) ? uploader.accept.join(',') : uploader.accept
      dragover.value = false
      if (!accept) {
        emit('file', Array.from(event.dataTransfer.files))
        return
      }
      emit(
        'file',
        Array.from(e.dataTransfer.files).filter(file => {
          const { type, name } = file
          const extension = name.indexOf('.') > -1 ? `.${name.split('.').pop()}` : ''
          const baseType = type.replace(/\/.*$/, '')

          return accept
            .split(',')
            .map(type => type.trim())
            .filter(type => type)
            .some(acceptedType => {
              if (acceptedType.startsWith('.')) {
                return extension === acceptedType
              }
              if (/\/\*$/.test(acceptedType)) {
                return baseType === acceptedType.replace(/\/\*$/, '')
              }
              if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                return type === acceptedType
              }
              return false
            })
        }),
      )
    }

    return {
      onDragover,
      onDrop,
      dragover,
    }
  },
})
</script>

<style></style>
