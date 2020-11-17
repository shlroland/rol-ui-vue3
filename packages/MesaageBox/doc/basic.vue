<template>
  <Button @click="openMsgBox">按 钮</Button>
  <Button type="text" @click="open1">点击打开 Message Box1</Button>
  <Button type="text" @click="open2">点击打开 Message Box2</Button>
  <!-- <MessageBoxIns title="消息弹框" /> -->
</template>

<script lang="ts">
import Button from '@rol-ui/button'
import MessageBox from '@rol-ui/message-box'
import Message from '@rol-ui/meassage'
import { defineComponent, h } from 'vue'

export default defineComponent({
  components: {
    Button,
    // MessageBoxIns,
  },

  setup() {
    const openMsgBox = () => {
      MessageBox.alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          Message({
            message: `action: ${action}`,
          })
        },
      })
    }

    const open1 = () => {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          Message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          Message({
            type: 'info',
            message: '已取消删除',
          })
        })
    }

    const open2 = () => {
      MessageBox.prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确',
      })
        .then(({ value }) => {
          Message({
            type: 'success',
            message: '你的邮箱是: ' + value,
          })
        })
        .catch(() => {
          Message({
            type: 'info',
            message: '取消输入',
          })
        })
    }

    return {
      openMsgBox,
      open1,
      open2,
    }
  },
})
</script>

<style></style>
