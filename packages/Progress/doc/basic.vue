<template>
  <div class="demo-container">
    <rol-progress :percentage="50"></rol-progress>
    <rol-progress :percentage="100" :format="format"></rol-progress>
    <rol-progress :percentage="100" status="success"></rol-progress>
    <rol-progress :percentage="100" status="warning"></rol-progress>
    <rol-progress :percentage="50" status="exception"></rol-progress>
  </div>
</template>

<script lang="ts">
import RolProgress from '@rol-ui/progress'

export default {
  components: {
    RolProgress,
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
  },
}
</script>

<style>
.demo-container .rol-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
