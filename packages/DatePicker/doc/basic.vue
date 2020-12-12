<template>
  <div class="demo-container">
    <rol-date-picker v-model="value1" type="date" placeholder="选择日期"></rol-date-picker>
  </div>
</template>

<script>
import RolDatePicker from '@rol-ui/date-picker'

export default {
  name: 'basic',
  components: {
    RolDatePicker,
  },
  data() {
    return {
      value1: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
