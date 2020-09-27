<template>
  <div :class="['rol-tabs__active-bar', `is-${rootTabs.props.tabPosition}`]" :style="barStyle"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabsBar',
})
</script>

<style></style>
