<template>
  <Button>按钮</Button>
</template>

<script lang="ts">
import Button from "../Button.vue";
export default {
  components: {
    Button,
  },
  setup(){
    return {
      aa(){
        alert(1111)
      }
    }
  }
};
</script>