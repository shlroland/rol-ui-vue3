<template>
  <div class="rol-page-header">
    <div class="rol-page-header__left">
      <Icon class="rol-icon-back" name="arrow-left" />
      <div class="rol-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="rol-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@rol-ui/icon'
export default defineComponent({
  name: 'RolPageHeader',
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: () => '返回',
    },
    content: {
      type: String,
      default: '',
    },
  },
  emits: ['back'],
})
</script>

<style></style>
