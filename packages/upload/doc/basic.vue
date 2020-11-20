<template>
  <rol-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
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

export default {
  components: {
    RolUpload,
    RolButton,
  },
  data() {
    return {
      fileList: [],
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
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`,
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSuccess() {
      console.log(arguments)
    },
    handleError() {
      console.log(arguments)
    },
    handleBeforeUpload() {
      console.log(arguments)
    },
  },
}
</script>

<style>
.upload-demo {
  width: 360px;
}
</style>