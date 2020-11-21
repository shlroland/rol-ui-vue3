<template>
  <rol-row class="tac">
    <rol-col :span="6">
      <h5>默认颜色</h5>
      <rol-menu default-active="2" class="rol-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
          <template #title>
            <rol-icon name="bars"></rol-icon>
            <span>导航二</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <template #title>
            <rol-icon name="file-alt"></rol-icon>
            <span>导航三</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="4">
          <template #title>
            <rol-icon name="sliders-h"></rol-icon>
            <span>导航四</span>
          </template>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
  </rol-row>
</template>

<script>
import { Menu, MenuGroup, Submenu, MenuItem } from '@rol-ui/menu'
import { Row as RolRow, RCol as RolCol } from '@rol-ui/grid'
import RolIcon from '@rol-ui/icon'

export default {
  components: {
    RolMenu: Menu,
    RolMenuItemGroup: MenuGroup,
    RolSubmenu: Submenu,
    RolMenuItem: MenuItem,
    RolRow,
    RolCol,
    RolIcon,
  },
}
</script>

<style>
.tac {
  text-align: center;
}
</style>
