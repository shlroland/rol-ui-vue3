/* eslint-disable @typescript-eslint/no-var-requires */
import { PropType, computed, watch, onBeforeUnmount } from 'vue'
import { ListType, PFileResultHandler, RolUploadFile, RolUploadFileMap, UploadPropsType, UploadStatus } from './upload'
import { NOOP } from '@vue/shared'
import { Restrictions, UppyFile, UppyOptions, DefaultPluginOptions } from '@uppy/core'
const { Uppy } = require('@uppy/core')
const { XHRUpload } = require('@uppy/xhr-upload')
// import XHRUpload from '@uppy/xhr-upload'

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
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  type: {
    type: String,
    default: 'select',
  },
  beforeUpload: {
    type: Function,
    default: null,
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
  restrictions: {
    type: Object as PropType<Restrictions>,
    default: () => null,
  },
  data: Object,
}

export const useUpload = (options: UploadPropsType, emit, fileMap: RolUploadFileMap) => {
  const acceptArray = computed(() => {
    if (!options.accept) return null
    if (typeof options.accept === 'string') {
      return options.accept.split(',')
    }
    return options.accept
  })

  const handleConvertBlobUrl = (file: UppyFile<{ url: string }>) => {
    if (file.meta.url) return file.meta.url
    return URL.createObjectURL(file.data)
  }

  const handleBeforeUpload = (files: any) => {
    if (!options.beforeUpload) return true
    const before = options.beforeUpload(files)
    if (before instanceof Promise) {
      before
        .then(() => {
          return true
        })
        .catch(() => {
          return false
        })
    } else {
      return !!before
    }
  }

  const xhrOptions = computed<Partial<DefaultPluginOptions>>(() => {
    return {
      endpoint: options.action,
      withCredentials: options.withCredentials,
      limit: options.limit,
      headers: options.headers,
      fieldName: options.name,
    } as Partial<DefaultPluginOptions>
  })

  const uppyOptions = computed<UppyOptions>(() => {
    return {
      autoProceed: options.autoUpload,
      restrictions: {
        allowedFileTypes: acceptArray.value,
        ...options.restrictions,
      },
      meta: options.data,
      onBeforeUpload: handleBeforeUpload,
    }
  })

  const uppy = new Uppy({ ...uppyOptions.value }).use(XHRUpload, { ...xhrOptions.value })

  uppy.on('file-added', (file: UppyFile<{ url: string }>) => {
    fileMap[file.id] = Object.assign<UppyFile, { status: UploadStatus; url: string }>(file, {
      status: 'ready',
      url: handleConvertBlobUrl(file),
    }) as RolUploadFile
  })

  uppy.on('upload-progress', (file: RolUploadFile, progress) => {
    Object.assign<UppyFile, { status: UploadStatus }>(file, { status: 'uploading' })
    fileMap[file.id] = { ...uppy.getFile(file.id), status: 'uploading' }
    emit('progress', progress, fileMap[file.id], uppy.getFiles())
  })

  uppy.on('upload-success', (file: RolUploadFile, response) => {
    Object.assign<UppyFile, { status: UploadStatus }>(file, { status: 'success' })
    fileMap[file.id] = { ...uppy.getFile(file.id), status: 'success' }
    emit('success', response, fileMap[file.id], uppy.getFiles())
  })

  uppy.on('upload-error', (file, error, response) => {
    Object.assign<UppyFile, { status: UploadStatus }>(file, { status: 'fail' })
    fileMap[file.id] = { ...uppy.getFile(file.id), status: 'fail' }
    emit('fail', response, error, fileMap[file.id], uppy.getFiles())
  })

  uppy.on('complete', result => {
    emit('complete', result)
  })

  uppy.on('error', error => {
    emit('error', error)
  })

  uppy.on('restriction-failed', (file, error) => {
    emit('restriction-failed', error, uppy.getFiles())
  })

  watch(xhrOptions, newVal => {
    uppy.getPlugin('XHRUpload').setOptions(newVal)
  })

  watch(uppyOptions, newVal => {
    uppy.setOptions(newVal)
  })

  onBeforeUnmount(() => {
    uppy.close()
  })

  return {
    uppy,
  }
}
