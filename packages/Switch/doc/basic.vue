<template>
  <div class="demo-container">
    <rol-switch v-model:modelValue="value" active-color="#13ce66" inactive-color="#ff4949" disabled></rol-switch>
  </div>
  <div class="demo-container">
    <rol-switch v-model:modelValue="value1" active-text="按月付费" inactive-text="按年付费"></rol-switch>
    <rol-switch
      style="display: block"
      v-model:modelValue="value1"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></rol-switch>
  </div>
  <div class="demo-container">
    <rol-tooltip :content="'Switch value: ' + value2" placement="top">
      <rol-switch
        v-model:modelValue="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      ></rol-switch>
    </rol-tooltip>
  </div>
</template>

<script>
import RolSwitch from '@rol-ui/switch'
import RolTooltip from '@rol-ui/tooltip'

export default {
    components: { RolSwitch,RolTooltip },
    data(){
      return {
        value: false,
        value1: false,
        value2: 100
      }
    }
}
</script>

<style>
</style>