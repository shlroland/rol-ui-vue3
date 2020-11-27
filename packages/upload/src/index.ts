import { defineComponent, h, provide, reactive, ref, VNode } from 'vue'
import { uploadProps, useUpload } from './useUpload'
import Upload from './upload.vue'
import UploadList from './upload-list.vue'
import { RolUploadFile } from './upload'

export default defineComponent({
  name: 'RolUpload',
  components: { Upload, UploadList },
  props: uploadProps,
  emits: ['exceed'],
  setup(props, { slots, emit }) {
    const uploadFiles= reactive<Record<string,RolUploadFile>>({})

    const { uppy } = useUpload(props, emit, uploadFiles)

    provide('rootUpload', {
      uploadFiles,
    })

    const handleUploadChange = () => {
      console.log(uppy)
      console.log(uppy.getFiles())
      // post()
    }

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

    const trigger = slots.trigger || slots.default
    let uploadList: VNode
    if (props.showFileList) {
      uploadList = h(
        UploadList,
        {
          disabled: props.disabled,
          listType: props.listType,
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
        onChange: handleUploadChange,
        accept: props.accept,
      },
      { default: () => trigger?.() },
    )

    return () =>
      h('div', [
        props.listType === 'picture-card' ? uploadList : null,
        slots.trigger ? [uploadComponent, slots.default()] : uploadComponent,
        slots.tip?.(),
        props.listType !== 'picture-card' ? uploadList : null,
      ])
  },
})
