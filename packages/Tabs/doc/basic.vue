<template>
  <div class="demo-container">
    <Tabs v-model:model-value="activeName" :type="type" :tab-position="tabPosition">
      <TabPane label="JavaScript" name="first">JavaScript</TabPane>
      <TabPane label="TypeScript" name="second">TypeScript</TabPane>
      <TabPane label="HTML5" name="third">HTML5</TabPane>
      <TabPane label="CSS" name="fourth">CSS</TabPane>
      <!-- <TabPane label="JavaScript" name="1">JavaScript</TabPane>
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
      <TabPane label="CSS" name="12">CSS</TabPane> -->
    </Tabs>
  </div>

  <!-- <div :class="['rol-tabs__nav-wrap', align ? `is-${align}` : '', size ? `is-${size}` : '', type ? `is-${type}` : '']">
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li><a>Videos</a></li>
      <li><a>Documents</a></li>
    </ul>
  </div> -->
  <!-- <div class="demo-container">
    <tabs-nav align="centered">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </tabs-nav>
  </div>
  <div class="demo-container">
    <tabs-nav>
      <ul>
        <li class="is-active">
          <a>
            <Icon class="icon" name="camera" />
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </tabs-nav>
  </div>
  <div class="demo-container">
    <tabs-nav size="small">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </tabs-nav>
  </div>
  <div class="demo-container">
    <tabs-nav type="toggle">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </tabs-nav>
  </div>
  <div class="demo-container">
    <tabs-nav type="toggle" toggle-rounded>
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </tabs-nav>
  </div> -->
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
