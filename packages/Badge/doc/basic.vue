<template>
  <div class="demo-container">
    <rol-badge :value="12" class="item">
      <rol-button size="small">评论</rol-button>
    </rol-badge>
    <rol-badge :value="3" class="item">
      <rol-button size="small">回复</rol-button>
    </rol-badge>
    <rol-badge :value="1" class="item" type="primary">
      <rol-button size="small">评论</rol-button>
    </rol-badge>
    <rol-badge :value="2" class="item" type="warning">
      <rol-button size="small">回复</rol-button>
    </rol-badge>
  </div>
  <div class="demo-container">
    <rol-badge :value="200" :max="99" class="item">
      <rol-button size="small">评论</rol-button>
    </rol-badge>
    <rol-badge :value="100" :max="10" class="item">
      <rol-button size="small">回复</rol-button>
    </rol-badge>
  </div>
  <div class="demo-container">
    <rol-badge value="new" class="item">
      <rol-button size="small">评论</rol-button>
    </rol-badge>
    <rol-badge value="hot" class="item">
      <rol-button size="small">回复</rol-button>
    </rol-badge>
    <rol-badge is-dot class="item">数据查询</rol-badge>
  </div>
</template>

<script>
import RolBadge from '@rol-ui/badge'
import RolButton from '@rol-ui/button'

export default {
    components: {RolBadge,RolButton}
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>