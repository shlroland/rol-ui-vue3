<template>
  <rol-row class="tac">
    <rol-col :span="12">
      <h5>默认颜色</h5>
      <rol-menu default-active="2" class="rol-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <rol-submenu index="1">
          <template slot="title">
            <i class="rol-icon-location"></i>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template slot="title">分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template slot="title">选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <i class="rol-icon-menu"></i>
          <span slot="title">导航二</span>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <i class="rol-icon-document"></i>
          <span slot="title">导航三</span>
        </rol-menu-item>
        <rol-menu-item index="4">
          <i class="rol-icon-setting"></i>
          <span slot="title">导航四</span>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
  </rol-row>
</template>

<script>
import { Menu, MenuGroup, Submenu, MenuItem } from '@rol-ui/menu'
import { Row as RolRow, RCol as RolCol } from '@rol-ui/grid'

export default {
  components: {
    RolMenu: Menu,
    RolMenuGroup: MenuGroup,
    RolSubmenu: Submenu,
    RolMenuItem: MenuItem,
    RolRow,
    RolCol,
  },
}
</script>

<style>
.tac {
  text-align: center;
}
</style>
