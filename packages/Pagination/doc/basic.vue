<template>
  <div class="demo-container">
    <span class="demonstration">页数较少时的效果</span>
    <rol-pagination layout="prev, pager, next" :total="50"> </rol-pagination>
  </div>
  <div class="demo-container">
    <span class="demonstration">大于 7 页时的效果</span>
    <rol-pagination layout="prev, pager, next" :total="1000"> </rol-pagination>
  </div>
  <div class="demo-container">
    <span class="demonstration">大于 7 页时的效果</span>
    <rol-pagination layout="prev, pager, next" :total="1000" :currentPage="25"> </rol-pagination>
  </div>
</template>

<script>
import RolPagination from '@rol-ui/pagination'

export default {
  components: {
    RolPagination,
  },
}
</script>

<style></style>
