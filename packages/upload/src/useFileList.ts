import { Uppy } from '@uppy/core'

export const useFileList = (uppy: Uppy, fileList: any[]) => {
  if (fileList.length === 0) return
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
  Promise.all(
    fileList.map(item => {
      return onImageClicked(item)
    }),
  ).then(() => {
    uppy.getFiles().forEach(file => {
      uppy.setFileState(file.id, {
        status: 'success',
        progress: { uploadComplete: true, uploadStarted: false },
      })
    })
  })
}
