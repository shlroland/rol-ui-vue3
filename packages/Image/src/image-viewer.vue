<template>
  <transition name="view-fade">
    <div ref="wrapper" tabindex="-1" class="rol-image-viewer__wrapper" :style="{ 'z-index': zIndex }">
      <div class="rol-image-viewer__mask">
        <!-- far fa-times-circle -->
        <!-- <Icon :name="['far', 'times-circle']" /> -->
      </div>
      <span class="rol-image-viewer__btn rol-image-viewer__close" @click="hide">
        <Icon :name="['far', 'times-circle']" />
      </span>
      <span class="rol-image-viewer__btn rol-image-viewer__prev">
        <Icon name="chevron-left" />
      </span>
      <span class="rol-image-viewer__btn rol-image-viewer__next">
        <Icon name="chevron-right" />
      </span>
      <div class="rol-image-viewer__btn rol-image-viewer__actions">
        <div class="rol-image-viewer__actions__inner">
          <Icon name="search-minus" />
          <Icon name="search-plus" />
          <i class="rol-image-viewer__actions__divider"></i>
          <Icon name="expand" />
          <i class="rol-image-viewer__actions__divider"></i>
          <Icon name="undo" />
          <Icon name="redo" />
        </div>
      </div>
      <div class="rol-image-viewer__canvas">
        <img v-for="(url, i) in urlList" v-show="i === index" :key="url" ref="img" :src="url" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Icon from '@rol-ui/icon'
import { PropType, ref } from 'vue'
export default {
  name: 'RolImageViewer',
  components: {
    Icon,
  },
  props: {
    urlList: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    onSwitch: {
      type: Function,
      default: () => ({}),
    },
    onClose: {
      type: Function,
      default: () => ({}),
    },
  },
  setup(props) {
    const index = ref(props.initialIndex)

    return {
      index,
    }
  },
}
</script>

<style></style>
