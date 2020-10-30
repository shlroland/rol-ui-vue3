<template>
  <div :class="[{ 'rol-tags': true }, { 'has-addons': addons }, `are-${allSize}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RolTags',
  props: {
    addons: Boolean,
    allSize: {
      type: String,
      default: 'normal',
      validator: (val: string): boolean => {
        return ['normal', 'small', 'medium', 'large'].indexOf(val) !== -1
      },
    },
  },
})
</script>

<style></style>
