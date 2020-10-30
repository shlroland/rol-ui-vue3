<template>
  <span class="demo-tag">
    <Tag>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="dark">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="black">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="light">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="white">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="primary">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="link">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="info">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="success">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="warning">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="danger">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="primary" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="link" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="info" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="success" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="warning" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="danger" light>label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="success" size="small">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="warning" size="large">label</Tag>
  </span>
  <span class="demo-tag">
    <Tag type="danger" size="medium">label</Tag>
  </span>
</template>

<script lang="ts">
import Tag from '@rol-ui/tag'

export default {
  components: {
    Tag,
  },
  data() {
    return {
      value1: '',
    }
  },
}
</script>

<style scoped>
.demo-tag {
  display: inline-block;
  margin: 0 10px;
}
</style>
