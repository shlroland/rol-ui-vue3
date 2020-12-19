<template>
  <rol-row class="tac">
    <rol-col :span="6">
      <h5>默认颜色</h5
      ><span>
        <rol-button @click="changeCollapse(false)">展开</rol-button>
        <rol-button @click="changeCollapse(true)">收起</rol-button>
      </span>
      <rol-menu
        default-active="2"
        class="rol-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <rol-submenu index="1">
          <template #title>
            <rol-icon name="compass"></rol-icon>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template #title>分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template #title>选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <rol-icon name="bars"></rol-icon>
          <template #title>
            <span>导航二</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <rol-icon name="file-alt"></rol-icon>

          <template #title>
            <span>导航三</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="4">
          <rol-icon name="sliders-h"></rol-icon>
          <template #title>
            <span>导航四</span>
          </template>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
    <!-- <rol-col :span="6" style="margin-left: 15px;">
      <h5>自定义颜色</h5>
      <rol-menu
        default-active="2"
        class="rol-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-background-color="#ffdd57"
      >
        <rol-submenu index="1">
          <template #title>
            <rol-icon name="compass"></rol-icon>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template #title>分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template #title>选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <i class="rol-icon-menu"></i>
          <rol-icon name="bars"></rol-icon>
          <span slot="title">导航二</span>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <rol-icon name="file-alt"></rol-icon>
          <span slot="title">导航三</span>
        </rol-menu-item>
        <rol-menu-item index="4">
          <rol-icon name="sliders-h"></rol-icon>
          <span slot="title">导航四</span>
        </rol-menu-item>
      </rol-menu>
    </rol-col> -->
  </rol-row>
</template>

<script>
import { Menu, MenuGroup, Submenu, MenuItem } from '@rol-ui/menu'
import { Row as RolRow, Col as RolCol } from '@rol-ui/grid'
import RolIcon from '@rol-ui/icon'
import { Button as RolButton } from '@rol-ui/button'

export default {
  components: {
    RolMenu: Menu,
    RolMenuItemGroup: MenuGroup,
    RolSubmenu: Submenu,
    RolMenuItem: MenuItem,
    RolRow,
    RolCol,
    RolIcon,
    RolButton,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    changeCollapse(flag) {
      this.isCollapse = flag
    },
  },
}
</script>

<style>
.tac {
  text-align: center;
}

.rol-menu-vertical-demo {
  text-align: left;
}

.rol-menu-vertical-demo:not(.rol-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>
