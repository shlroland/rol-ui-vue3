import { defineComponent, h, onBeforeUnmount, provide, reactive, VNode, watch } from 'vue'
import { uploadProps, useUpload } from './useUpload'
import Upload from './upload.vue'
import UploadList from './upload-list.vue'
import { ListType, RolUploadFile } from './upload'
import { NOOP } from '@vue/shared'
import { useFileList } from './useFileList'

export default defineComponent({
  name: 'RolUpload',
  components: { Upload, UploadList },
  props: uploadProps,
  emits: ['exceed', 'error', 'preview'],
  setup(props, { slots, emit }) {
    const uploadFiles = reactive<Record<string, RolUploadFile>>({})

    const { uppy } = useUpload(props, emit, uploadFiles)
    useFileList(uppy, props.fileList)

    const addFile = (files: File[]) => {
      if (props.limit && files.length + Object.keys(uploadFiles).length > props.limit) {
        emit('exceed', files, uppy.getFiles())
      } else {
        files.forEach(file => {
          uppy.addFile({
            name: file.name,
            type: file.type,
            data: file,
          })
        })
      }
    }

    const removeFile = (file: RolUploadFile) => {
      const doRemove = () => {
        delete uploadFiles[file.id]
        uppy.removeFile(file.id)
      }
      if (!props.beforeRemove) {
        doRemove()
      } else if (typeof props.beforeRemove === 'function') {
        const before = props.beforeRemove(file, uppy.getFiles())
        if (before instanceof Promise) {
          before
            .then(() => {
              doRemove()
            })
            .catch(NOOP)
        } else if (before !== false) {
          doRemove()
        }
      }
    }

    const handlePreview = (file: RolUploadFile) => {
      emit('preview', file)
    }

    watch(
      () => props.listType,
      (val: ListType) => {
        if (val === 'picture-card' || val === 'picture') {
          for (const prop in uploadFiles) {
            if (!uploadFiles[prop].url && uploadFiles[prop].data) {
              try {
                uploadFiles[prop].url = URL.createObjectURL(uploadFiles[prop].data)
              } catch (err) {
                emit('error', err)
              }
            }
          }
        }
      },
    )

    provide('uploader', { accept: props.accept })

    onBeforeUnmount(() => {
      Object.values(uploadFiles).forEach(file => {
        if (file.url && file.url.indexOf('blob:') === 0) {
          URL.revokeObjectURL(file.url)
        }
      })
    })

    const trigger = slots.trigger || slots.default
    let uploadList: VNode
    if (props.showFileList) {
      uploadList = h(
        UploadList,
        {
          disabled: props.disabled,
          listType: props.listType,
          files: uploadFiles,
          onRemove: removeFile,
          handlePreview,
        },
        {
          file: (props: { file: File }) => {
            if (slots.file) {
              return slots.file({
                file: props.file,
              })
            } else {
              return null
            }
          },
        },
      )
    } else {
      uploadList = null
    }

    const uploadComponent = h(
      Upload,
      {
        multiple: props.multiple,
        name: props.name,
        disabled: props.disabled,
        listType: props.listType,
        addFile,
        accept: props.accept,
        drag: props.drag,
      },
      { default: () => trigger?.() },
    )

    return {
      component: h('div', [
        props.listType === 'picture-card' ? uploadList : null,
        slots.trigger ? [uploadComponent, slots.default()] : uploadComponent,
        slots.tip?.(),
        props.listType !== 'picture-card' ? uploadList : null,
      ]),
      uppy,
      submit: uppy.upload,
    }
  },
  render() {
    return this.component
  },
})
