<template>
  <!-- <rol-upload
    class="upload-demo"
    action="http://localhost:6061/upload"
    multiple
    :accept="accept"
    :limit="0"
    @exceed="handleExceed"
    @progress="handleProgress"
    @success="handleSuccess"
    @fail="handleFail"
    @error="handleError"
    :before-upload="handleBeforeUpload"
    :file-list="fileList"
  >
    <rol-button size="small" type="primary">点击上传</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </rol-upload> -->
  <!-- <rol-upload
    class="avatar-uploader"
    action="http://localhost:6061/upload"
    :show-file-list="false"
    @success="handleAvatarSuccess"
    :file-list="fileList"
    multiple
    :accept="accept"
    :limit="0"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <div v-else class="avatar-uploader-icon">
      <rol-icon name="plus"></rol-icon>
    </div>
  </rol-upload> -->
  <!-- <rol-upload
    action="http://localhost:6061/upload"
    list-type="picture-card"
    @preview="handlePictureCardPreview"
    @remove="handleRemove"
  >
     <rol-icon name="plus"></rol-icon>
  </rol-upload> -->
  <rol-upload
    class="upload-demo"
    :action="actionUrl"
    @exceed="handleExceed"
    @progress="handleProgress"
    @success="handleSuccess"
    @fail="handleFail"
    @error="handleError"
    v-model:file-list="fileList"
    list-type="picture"
  >
    <rol-button size="small" type="primary">点击上传</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </rol-upload>
  <!-- <rol-upload class="upload-demo" drag action="http://localhost:6061/upload" multiple>
    <div class="rol-icon-upload"><rol-icon name="upload"></rol-icon></div>
    <div class="rol-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="rol-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </rol-upload> -->
  <!-- 
  <rol-upload
    class="upload-demo"
    ref="upload"
    action="http://localhost:6061/upload"
    @preview="handlePreview"
    @remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
  >
    <template #trigger>
      <rol-button size="small" type="primary">选取文件</rol-button>
    </template>
    <rol-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </rol-upload> -->
</template>

<script lang="ts">
import RolUpload from '@rol-ui/upload'
import { Button as RolButton } from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'
import message from '@rol-ui/message'

export default {
  components: {
    RolUpload,
    RolButton,
    RolIcon,
  },
  data() {
    return {
      actionUrl: 'http://localhost:6061/upload',
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      accept: ['image/*', '.jpg', '.jpeg', '.png', '.gif'],
      imageUrl: '',
    }
  },
  mounted() {
    setTimeout(() => {
      this.actionUrl = 'https://jsonplaceholder.typicode.com/posts'
    }, 1000)
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
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.fileList} 个文件`,
      )
    },
    handleProgress() {
      // console.log('success', ...arguments)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSuccess() {
      console.log('success', ...arguments)
    },
    handleFail() {
      console.log('fail', ...arguments)
    },
    handleError() {
      console.log('error', ...arguments)
    },
    handleBeforeUpload() {
      return true
    },
    handleBeforeRemove() {
      return false
    },
    handleAvatarSuccess(res, file) {
      // console.log(file)
      this.imageUrl = URL.createObjectURL(file.data)
      console.log(URL.createObjectURL(file.data))
    },
    handlePictureCardPreview(file) {
      // this.dialogImageUrl = file.url
      // this.dialogVisible = true
      console.log(file.url)
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
  },
}
</script>

<style>
.upload-demo {
  width: 360px;
}

.avatar-uploader .rol-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .rol-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
