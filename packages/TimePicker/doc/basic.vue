<template>
  <div class="demo-container">
    <rol-time-picker v-model="value1" placeholder="任意时间点"></rol-time-picker>
    <rol-time-picker v-model="value2" placeholder="任意时间点" arrow-control></rol-time-picker>
  </div>
  <div class="demo-container">
    <rol-time-picker is-range v-model="value1" placeholder="任意时间点"></rol-time-picker>
    <rol-time-picker is-range v-model="value2" placeholder="任意时间点" arrow-control></rol-time-picker>
  </div>
</template>

<script>
import RolTimePicker from '@rol-ui/time-picker'
export default {
  components: {
    RolTimePicker,
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      value3: new Date(2016, 9, 10, 18, 40),
      value4: new Date(2016, 9, 10, 18, 40),
    }
  },
}
</script>

<style></style>
