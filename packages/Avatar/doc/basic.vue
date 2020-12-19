<template>
  <rol-row class="demo-avatar demo-basic">
    <r-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <rol-avatar :size="50" :src="circleUrl"></rol-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <rol-avatar :size="size" :src="circleUrl"></rol-avatar>
        </div>
      </div>
    </r-col>
    <r-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <rol-avatar shape="square" :size="50" :src="squareUrl"></rol-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <rol-avatar shape="square" :size="size" :src="squareUrl"></rol-avatar>
        </div>
      </div>
    </r-col>
  </rol-row>
  <rol-row class="demo-type">
    <r-col>
      <div>
        <rol-avatar icon="user"></rol-avatar>
      </div>
      <div>
        <rol-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></rol-avatar>
      </div>
      <div>
        <rol-avatar>user</rol-avatar>
      </div>
    </r-col>
  </rol-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Row as RolRow, Col as RCol } from '@rol-ui/grid'
import RolAvatar from '@rol-ui/avatar'

export default defineComponent({
  components: { RolRow, RCol, RolAvatar },
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
    }
  },
})
</script>

<style>
.demo-avatar.demo-basic {
  text-align: center;
}
.demo-avatar .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #8492a6;
}

.demo-avatar.demo-basic .demo-basic--circle,
.demo-avatar.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-avatar.demo-basic .demo-basic--circle .block:not(:last-child),
.demo-avatar.demo-basic .demo-basic--square .block:not(:last-child) {
  border-right: 1px solid rgba(224, 230, 237, 0.5);
}

.demo-avatar .demo-type {
  display: flex;
}
</style>
