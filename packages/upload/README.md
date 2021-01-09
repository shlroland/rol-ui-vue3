---
title: Upload
description: Upload component doc
wrapperClass: upload-demo-wrapper
tags:
  - 'components'
  - 'form'
---

# Upload 上传

通过点击或者拖拽上传文件

<p class="text-red-300">Upload 组件核心是uppy插件</p>

## 点击上传

通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置`limit`和`on-exceed`来限制上传文件的个数和定义超出限制时的行为。可通过设置`before-remove`来阻止文件移除操作。

```vue demo
<template>
  <rol-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    @preview="handlePreview"
    @remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    @exceed="handleExceed"
    :file-list="fileList"
  >
    <rol-button size="small" type="primary">点击上传</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
    </template>
  </rol-upload>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const fileList = ref([
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
    ])

    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = file => {
      console.log(file)
    }
    const handleExceed = (files, fileList) => {
      globalFuncs.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`,
      )
    }
    const beforeRemove = (file, fileList) => {
      return globalFuncs.$confirm(`确定移除 ${file.name}？`)
    }

    return {
      fileList,
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove,
    }
  },
}
</script>
```

## 用户头像上传

使用 `before-upload` 限制用户上传的图片格式和大小。

```vue demo
<template>
  <rol-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    @success="handleAvatarSuccess"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <div v-else class="avatar-uploader-icon">
      <rol-icon name="plus"></rol-icon>
    </div>
  </rol-upload>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const imageUrl = ref('')

    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const handleAvatarSuccess = (res, file) => {
      imageUrl.value = file.url
    }
    const beforeAvatarUpload = file => {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        globalFuncs.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        globalFuncs.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }

    return {
      imageUrl,
      handleAvatarSuccess,
      beforeAvatarUpload,
    }
  },
}
</script>
```

## 照片墙

使用 `list-type` 属性来设置文件列表的样式。

```vue demo
<template>
  <rol-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    @preview="handlePictureCardPreview"
    @remove="handleRemove"
  >
    <rol-icon name="plus"></rol-icon>
  </rol-upload>
  <rol-modal v-model:visible="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </rol-modal>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)

    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePictureCardPreview = file => {
      dialogImageUrl.value = file.url
      dialogVisible.value = true
    }

    return {
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
    }
  },
}
</script>
```

## 图片列表缩略图

```vue demo
<template>
  <rol-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    @preview="handlePreview"
    @remove="handleRemove"
    v-model:file-list="fileList"
    list-type="picture"
  >
    <rol-button size="small" type="primary">点击上传</rol-button>
    <template #tip>
      <div class="rol-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </rol-upload>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const fileList = ref([
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
    ])

    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = file => {
      console.log(file)
    }

    return {
      fileList,
      handleRemove,
      handlePreview,
    }
  },
}
</script>
```

## 拖拽上传

```vue demo
<template>
  <rol-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
    <div class="rol-icon-upload"><rol-icon name="upload"></rol-icon></div>
    <div class="rol-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="rol-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </rol-upload>
</template>
```

## 手动上传

```vue demo
<template>
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
  </rol-upload>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const fileList = ref([
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
    ])

    const upload = ref(null)

    const submitUpload = () => {
      upload.value.submit()
    }

    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = file => {
      console.log(file)
    }

    return {
      fileList,
      upload,
      submitUpload,
      handleRemove,
      handlePreview,
    }
  },
}
</script>
```

### Attribute

| 参数             | 说明                                                                                                                                 | 类型                     | 可选值                    | 默认值 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------------- | ------ |
| action           | 必选参数，上传的地址                                                                                                                 | string                   | —                         | —      |
| headers          | 设置上传的请求头部                                                                                                                   | object                   | —                         | —      |
| multiple         | 是否支持多选文件                                                                                                                     | boolean                  | —                         | —      |
| data             | 上传时附带的额外参数                                                                                                                 | object                   | —                         | —      |
| name             | 上传的文件字段名                                                                                                                     | string                   | —                         | file   |
| with-credentials | 支持发送 cookie 凭证信息                                                                                                             | boolean                  | —                         | false  |
| show-file-list   | 是否显示已上传文件列表                                                                                                               | boolean                  | —                         | true   |
| drag             | 是否启用拖拽上传                                                                                                                     | boolean                  | —                         | false  |
| accept           | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效） | string                   | —                         | —      |
| before-upload    | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。                                        | function(file)           | —                         | —      |
| before-remove    | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。                              | function(file, fileList) | —                         | —      |
| list-type        | 文件列表的类型                                                                                                                       | string                   | text/picture/picture-card | text   |
| auto-upload      | 是否在选取文件后立即进行上传                                                                                                         | boolean                  | —                         | true   |
| file-list        | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]                                                       | array                    | —                         | []     |
| disabled         | 是否禁用                                                                                                                             | boolean                  | —                         | false  |
| limit            | 最大允许上传个数                                                                                                                     | number                   | —                         | —      |

### Events

| 参数     | 说明                                                           | 类型                               | 可选值 | 默认值 |
| -------- | -------------------------------------------------------------- | ---------------------------------- | ------ | ------ |
| preview  | 点击文件列表中已上传的文件时的钩子                             | function(file)                     | —      | —      |
| remove   | 文件列表移除文件时的钩子                                       | function(file, fileList)           | —      | —      |
| success  | 文件上传成功时的钩子                                           | function(response, file, fileList) | —      | —      |
| error    | 文件上传失败时的钩子                                           | function(err, file, fileList)      | —      | —      |
| progress | 文件上传时的钩子                                               | function(event, file, fileList)    | —      | —      |
| rol-     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList)           | —      | —      |
| exceed   | 文件超出个数限制时的钩子                                       | function(files, fileList)          | —      | -      |

### Slot

| name    | 说明                 |
| ------- | -------------------- |
| trigger | 触发文件选择框的内容 |
| tip     | 提示说明文字         |

### Methods

| 方法名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| submit | 手动上传文件列表 | —    |
| uppy   | Uppy 实例        | —    |
