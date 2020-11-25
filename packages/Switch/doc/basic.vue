<template>
  <div class="demo-container">
    <rol-switch v-model:modelValue="value" active-color="#13ce66" inactive-color="#ff4949"></rol-switch>
  </div>
</template>

<script>
import RolSwitch from '@rol-ui/switch'

export default {
    components: { RolSwitch },
    data(){
      return {
        value: false
      }
    }
}
</script>

<style>
</style>