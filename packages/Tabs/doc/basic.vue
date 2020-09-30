<template>
  <div class="demo-container">
    <Tabs v-model:model-value="activeName" :type="type">
      <TabPane label="JavaScript" name="first">JavaScript</TabPane>
      <TabPane label="TypeScript" name="second">TypeScript</TabPane>
      <TabPane label="HTML5" name="third">HTML5</TabPane>
      <TabPane label="CSS" name="fourth">CSS</TabPane>
      <TabPane label="JavaScript" name="1">JavaScript</TabPane>
      <TabPane label="TypeScript" name="2">TypeScript</TabPane>
      <TabPane label="HTML5" name="3">HTML5</TabPane>
      <TabPane label="CSS" name="4">CSS</TabPane>
      <TabPane label="JavaScript" name="5">JavaScript</TabPane>
      <TabPane label="TypeScript" name="6">TypeScript</TabPane>
      <TabPane label="HTML5" name="7">HTML5</TabPane>
      <TabPane label="CSS" name="8">CSS</TabPane>
      <TabPane label="JavaScript" name="9">JavaScript</TabPane>
      <TabPane label="TypeScript" name="10">TypeScript</TabPane>
      <TabPane label="HTML5" name="11">HTML5</TabPane>
      <TabPane label="CSS" name="12">CSS</TabPane>
    </Tabs>
  </div>
</template>

<script>
import Tabs, { TabPane } from '@rol-ui/tabs'
// import Icon from '@rol-ui/icon'
export default {
  components: {
    Tabs,
    TabPane,
    // TabsNav,
  },
  data() {
    return {
      activeName: 'first',
      type: 'boxed',
      size: 'small',
      align: 'centered',
      fullwidth: true,
      tabPosition: 'right',
    }
  },
}
</script>

<style lang="scss">
.demo-container {
  margin-bottom: 40px;
}
</style>
