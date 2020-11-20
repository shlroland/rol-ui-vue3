import { PropType, computed } from 'vue'
import { ListType, PFileResultHandler, RolUploadFileMap, UploadPropsType, UploadStatus } from './upload'
import { NOOP } from '@vue/shared'
import Uppy, { UppyFile } from '@uppy/core'
import XHRUpload from '@uppy/xhr-upload'

export const uploadProps = {
  action: {
    type: String,
    required: true,
  },
  headers: {
    type: Object as PropType<Headers>,
    default: () => ({}),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'file',
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'select',
  },
  beforeUpload: {
    type: Function,
    default: NOOP,
  },
  beforeRemove: {
    type: Function,
    default: NOOP,
  },
  onRemove: {
    type: Function,
    default: NOOP,
  },
  onChange: {
    type: Function,
    default: NOOP,
  },
  onPreview: {
    type: Function,
    default: NOOP,
  },
  onSuccess: {
    type: Function as PFileResultHandler,
    default: NOOP,
  },
  onProgress: {
    type: Function,
    default: NOOP,
  },
  onError: {
    type: Function,
    default: NOOP,
  },
  onExceed: {
    type: Function,
    default: NOOP,
  },
  fileList: {
    type: Array,
    default: () => {
      return []
    },
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String as PropType<ListType>,
    default: 'text' as ListType, // text,picture,picture-card
  },
  disabled: Boolean,
  limit: {
    type: Number as PropType<Nullable<number>>,
    default: null,
  },
}

export const useUpload = (options: UploadPropsType, fileMap: RolUploadFileMap) => {
  const xhrOptions = computed(() => {
    return {
      endpoint: options.action,
      withCredentials: options.withCredentials,
    }
  })

  const uppy = Uppy({ autoProceed: options.autoUpload }).use(XHRUpload, { ...xhrOptions.value })

  const addFile = (file: File) => {
    uppy.addFile({
      source: 'file input',
      name: file.name,
      type: file.type,
      data: file,
    })
  }

  const upload = () => {
    uppy.upload()
  }

  uppy.on('file-added', (file: UppyFile) => {
    console.log('Added file', file)
    fileMap.value.set(
      file.id,
      Object.assign<UppyFile, { status: UploadStatus }>(file, { status: 'ready' }),
    )
  })

  uppy.on('upload-success', (file, response) => {
    options.onSuccess(response, file)
  })
  uppy.on('upload', ({ id, fileIDs }) => {
    // data object consists of `id` with upload ID and `fileIDs` array
    // with file IDs in current upload
    // data: { id, fileIDs }
    console.log(`Starting upload ${id} for files ${fileIDs}`)
  })
  uppy.on('upload-progress', (file, progress) => {
    // file: { id, name, type, ... }
    // progress: { uploader, bytesUploaded, bytesTotal }
    console.log(file.id, progress.bytesUploaded, progress.bytesTotal)
  })

  uppy.on('complete', result => {
    console.log('successful files:', result.successful)
    console.log('failed files:', result.failed)
  })

  return {
    addFile,
    upload,
    uppy,
  }
}
