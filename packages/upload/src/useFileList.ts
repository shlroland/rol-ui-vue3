import { Uppy } from '@uppy/core'
import { RolUploadFile } from './upload'

export const useFileList = (
  uppy: Uppy,
  fileList: any[],
  autoUpload: boolean,
  uploadFiles: Record<string, RolUploadFile>,
) => {
  if (fileList.length === 0) return
  uppy.setOptions({
    autoProceed: false,
  })
  const onImageClicked = item => {
    if (!item.url) return
    return fetch(item.url)
      .then(response => response.blob())
      .then(blob => {
        uppy.addFile({
          name: item.name ?? 'image.jpg',
          type: blob.type,
          data: blob,
          meta: {
            url: item.url,
          },
        })
      })
  }
  return Promise.all(
    fileList.map(item => {
      return onImageClicked(item)
    }),
  )
    .then(() => {
      uppy.getFiles().forEach(file => {
        uploadFiles[file.id].status = 'success'
        uploadFiles[file.id].progress.uploadComplete = true
        uploadFiles[file.id].progress.uploadStarted = 100
        uppy.setFileState(file.id, {
          status: 'success',
          progress: { uploadComplete: true, uploadStarted: 100 },
        })
      })
    })
    .then(() => {
      uppy.setOptions({
        autoProceed: autoUpload,
      })
    })
}
