<template>
  <rol-upload
    class="upload-demo"
    action="http://localhost:6061/upload"
    multiple
    :accept="accept"
    :limit="0"
    :data="{ xxx : '221'}"
    @exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
    :before-upload="handleBeforeUpload"
    :file-list="fileList"
  >
    <rol-button size="small" type="primary">点击上传</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </rol-upload>
</template>

<script lang="ts">
import RolUpload from '@rol-ui/upload'
import RolButton from '@rol-ui/button'
import message from '@rol-ui/meassage'

export default {
  components: {
    RolUpload,
    RolButton,
  },
  data() {
    return {
      fileList: [],
      accept: ['image/*', '.jpg', '.jpeg', '.png', '.gif'],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.size} 个文件`,
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSuccess() {
      console.log('success', ...arguments)
    },
    handleError() {
      console.log('error', ...arguments)
    },
    handleBeforeUpload() {
      console.log('before', ...arguments)
    },
  },
}
</script>

<style>
.upload-demo {
  width: 360px;
}
</style>
