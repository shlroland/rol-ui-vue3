<template>
  <div class="demo-container">
    <Tabs v-model:model-value="activeName">
      <TabPane label="JavaScript" name="first">JavaScript</TabPane>
      <TabPane label="TypeScript" name="second">TypeScript</TabPane>
      <TabPane label="HTML5" name="third">HTML5</TabPane>
      <TabPane label="CSS" name="fourth">CSS</TabPane>
      <TabPane label="JavaScript" name="1">JavaScript</TabPane>
      <TabPane label="TypeScript" name="2">TypeScript</TabPane>
      <!-- <TabPane label="HTML5" name="3">HTML5</TabPane>
      <TabPane label="CSS" name="4">CSS</TabPane>
      <TabPane label="JavaScript" name="5">JavaScript</TabPane>
      <TabPane label="TypeScript" name="6">TypeScript</TabPane>
      <TabPane label="HTML5" name="7">HTML5</TabPane>
      <TabPane label="CSS" name="8">CSS</TabPane>
      <TabPane label="JavaScript" name="9">JavaScript</TabPane>
      <TabPane label="TypeScript" name="10">TypeScript</TabPane>
      <TabPane label="HTML5" name="11">HTML5</TabPane>
      <TabPane label="CSS" name="12">CSS</TabPane>
      <TabPane label="JavaScript" name="21">JavaScript</TabPane>
      <TabPane label="TypeScript" name="22">TypeScript</TabPane>
      <TabPane label="HTML5" name="23">HTML5</TabPane>
      <TabPane label="CSS" name="24">CSS</TabPane>
      <TabPane label="JavaScript" name="25">JavaScript</TabPane>
      <TabPane label="TypeScript" name="26">TypeScript</TabPane>
      <TabPane label="HTML5" name="27">HTML5</TabPane>
      <TabPane label="CSS" name="28">CSS</TabPane>
      <TabPane label="JavaScript" name="29">JavaScript</TabPane>
      <TabPane label="TypeScript" name="210">TypeScript</TabPane>
      <TabPane label="HTML5" name="211">HTML5</TabPane>
      <TabPane label="CSS" name="212">CSS</TabPane> -->
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
      size: 'large',
      align: 'centered',
      fullwidth: true,
      tabPosition: 'left',
    }
  },
}
</script>

<style lang="scss" >
.demo-container {
  margin-bottom: 40px;
}
</style>
