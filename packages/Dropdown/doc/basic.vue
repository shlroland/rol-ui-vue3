<template>
  <div>
    <Dropdown>
      <span class="rol-dropdown-link"> 下拉菜单</span>
      <template #dropdown>
        <DropdownMenu>
          <DropdownItem>黄金糕</DropdownItem>
          <DropdownItem>狮子头</DropdownItem>
          <DropdownItem>螺蛳粉</DropdownItem>
          <DropdownItem disabled>双皮奶</DropdownItem>
          <DropdownItem divided>蚵仔煎</DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown, { DropdownMenu, DropdownItem } from '@rol-ui/dropdown'
export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
  },
}
</script>

<style></style>
