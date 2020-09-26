<template>
  <Icon
    name="camera"
  />
</template>

<script lang="ts">
import Icon from '@rol-ui/icon'

export default {
  components: {
    Icon,
  },
  setup() {
    return {
      aa() {
        alert(1111)
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
