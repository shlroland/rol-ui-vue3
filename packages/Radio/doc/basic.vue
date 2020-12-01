<template>
  <div class="demo-container">
    <rol-radio v-model="radio" label="1">备选项</rol-radio>
    <rol-radio v-model="radio" label="2">备选项</rol-radio>
  </div>
  <div class="demo-container"></div>
  <div class="demo-container"></div>
</template>

<script lang="ts">
import RolRadio from '@rol-ui/radio'

export default {
  components: {
    RolRadio,
  },
  data() {
    return {
      radio: '1',
    }
  },
  methods: {},
}
</script>

<style>
.demo-container .rol-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
