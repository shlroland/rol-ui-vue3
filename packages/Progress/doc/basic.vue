<template>
  <div class="demo-container">
    <rol-progress :percentage="50"></rol-progress>
    <rol-progress :percentage="100" :format="format"></rol-progress>
    <rol-progress :percentage="100" status="success"></rol-progress>
    <rol-progress :percentage="100" status="warning"></rol-progress>
    <rol-progress :percentage="50" status="exception"></rol-progress>
  </div>
  <div class="demo-container">
    <rol-progress :text-inside="true" :stroke-width="26" :percentage="70"></rol-progress>
    <rol-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></rol-progress>
    <rol-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></rol-progress>
    <rol-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></rol-progress>
  </div>
  <div class="demo-container">
    <rol-progress :percentage="percentage" :color="customColor"></rol-progress>
    <rol-progress :percentage="percentage" :color="customColorMethod"></rol-progress>
    <rol-progress :percentage="percentage" :color="customColors"></rol-progress>
    <rol-button @click="decrease">-</rol-button>
    <rol-button @click="increase">+</rol-button>
  </div>
</template>

<script lang="ts">
import RolProgress from '@rol-ui/progress'
import { Button as RolButton } from '@rol-ui/button'

export default {
  components: {
    RolProgress,
    RolButton,
  },
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
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
