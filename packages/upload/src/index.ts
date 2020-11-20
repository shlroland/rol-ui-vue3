import { defineComponent, h, ref, VNode } from 'vue'
import { uploadProps, useUpload } from './useUpload'
import Upload from './upload.vue'
import UploadList from './upload-list.vue'
import { RolUploadFile } from './upload'

export default defineComponent({
  name: 'RolUpload',
  components: { Upload, UploadList },
  props: uploadProps,
  setup(props, { slots }) {
    const uploadFileMap = ref(new Map<string, RolUploadFile>())

    const { addFile, uppy } = useUpload(props, uploadFileMap)

    const handleUploadChange = () => {
      console.log(uppy)
      console.log(uppy.getFiles())
      // post()
    }

    const trigger = slots.trigger || slots.default
    let uploadList: VNode
    if (props.showFileList) {
      uploadList = h(
        UploadList,
        {
          disabled: props.disabled,
          listType: props.listType,
          files: uploadFileMap.value,
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
