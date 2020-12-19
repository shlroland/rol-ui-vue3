<template>
  <span class="demo-tag">
    <Tag closable>label</Tag>
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
  <span class="demo-tag">
    <Tag rounded>label</Tag>
  </span>

  <div style="margin-top: 50px; width: 200px; border: 1px solid #333;">
    <Tags all-size="normal">
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
      <Tag>label</Tag>
    </Tags>
  </div>

  <div style="margin-top: 50px;">
    <TagsAddons mode="badge" left-text="npm" right-text="good" right-type="success"></TagsAddons>
    <TagsAddons
      v-show="labelVisible"
      mode="blog"
      left-text="Alex"
      left-type="danger"
      @close="labelVisible = false"
    ></TagsAddons>
  </div>
</template>

<script lang="ts">
import { Tag, Tags, TagsAddons } from '@rol-ui/tag'

export default {
  components: {
    Tag,
    Tags,
    TagsAddons,
  },
  data() {
    return {
      value1: '',
      labelVisible: true,
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
