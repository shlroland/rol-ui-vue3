import { UppyFile } from '@uppy/core'
import { XHRUploadOptions } from '@uppy/xhr-upload'
import { ExtractPropTypes, PropType, Ref } from 'vue'
import { uploadProps } from './useUpload'

export type ListType = 'text' | 'picture' | 'picture-card'
export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

export type UploadPropsType = ExtractPropTypes<typeof uploadProps>

export interface XHRUploadOptionsExtension extends XHRUploadOptions {
  withCredentials: boolean
  responseType: string
}

export type FileResultHandler<T = any> = (param: T, file: UppyFile) => void
export type PFileResultHandler<T = any> = PropType<FileResultHandler<T>>

export interface RolUploadFile extends UppyFile {
  status: UploadStatus
}


export type RolUploadFileMap = Ref<Map<string, RolUploadFile>>
