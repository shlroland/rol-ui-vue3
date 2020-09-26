<template>
  <div class="demo-container">
    <Tabs>
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </Tabs>
  </div>
  <div class="demo-container">
    <Tabs class="is-right">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </Tabs>
  </div>
  <div class="demo-container">
    <Tabs>
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
    </Tabs>
  </div>
  <div class="demo-container">
    <Tabs class="is-large">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </Tabs>
  </div>
  <div class="demo-container">
    <Tabs class="is-toggle">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </Tabs>
  </div>
</template>

<script>
import { Tabs } from '@rol-ui/tabs'
import Icon from '@rol-ui/icon'
export default {
  components: {
    Tabs,
    Icon,
  },
}
</script>

<style lang="scss">
.demo-container {
  margin-bottom: 40px;
}
</style>
