<template>
  <div>
    <Dropdown trigger="click">
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
  <div>
    <Dropdown split-button type="primary">
      更多菜单
      <template #dropdown>
        <DropdownMenu>
          <DropdownItem>黄金糕</DropdownItem>
          <DropdownItem>狮子头</DropdownItem>
          <DropdownItem>螺蛳粉</DropdownItem>
          <DropdownItem>双皮奶</DropdownItem>
          <DropdownItem>蚵仔煎</DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from '@rol-ui/dropdown'
// import Button, { ButtonGroup } from '@rol-ui/button'
export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    // Button,
    // ButtonGroup,
  },
}
</script>

