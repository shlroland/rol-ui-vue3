<template>
  <router-view></router-view>
</template>

<script>
import { provide,ref } from "vue";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    // router.afterEach()
  },
};
</script>
