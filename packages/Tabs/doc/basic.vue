<template>
  <div class="demo-container">
    <Tabs :model-value="'first'">
      <TabPane label="JavaScript" name="first">JavaScript</TabPane>
      <TabPane label="TypeScript" name="second">TypeScript</TabPane>
      <TabPane label="HTML5" name="third">HTML5</TabPane>
      <TabPane label="CSS" name="third">CSS</TabPane>
    </Tabs>
  </div>
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
}
</script>

<style lang="scss">
.demo-container {
  margin-bottom: 40px;
}
</style>
