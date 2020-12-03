<template>
  <!-- <div class="demo-container">
    <rol-radio v-model="radio" label="1" disabled>备选项</rol-radio>
    <rol-radio v-model="radio" label="2" disabled>备选项</rol-radio>
  </div>-->
  <div class="demo-container">
    <rol-radio-group v-model="radio">
      <rol-radio :label="3">备选项</rol-radio>
      <rol-radio :label="6">备选项</rol-radio>
      <rol-radio :label="9">备选项</rol-radio>
    </rol-radio-group>
  </div>
  <div class="demo-container"></div>
</template>

<script lang="ts">
import { Radio as RolRadio, RadioGroup as RolRadioGroup } from '@rol-ui/radio'

export default {
  components: {
    RolRadio,
    RolRadioGroup,
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
