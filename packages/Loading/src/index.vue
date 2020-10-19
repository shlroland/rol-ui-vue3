<template>
  <transition name="rol-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="rol-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="rol-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" />
        </svg>
        <Icon v-else :name="spinner" />
        <p v-if="text" class="rol-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Icon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolLoading',
  components: {
    Icon,
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null,
    },
    spinner: {
      type: String,
      default: null,
    },
    background: {
      type: String,
      default: '',
    },
    fullscreen: Boolean,
    visible: Boolean,
    customClass: {
      type: String,
      default: '',
    },
  },
  emits: ['after-leave'],
  setup(props, { emit }) {
    const data = reactive({ ...props })

    const handleAfterLeave = () => {
      emit('after-leave')
    }

    const show = () => {
      data.visible = true
    }

    const close = () => {
      data.visible = false
    }
    const setText = text => {
      data.text = text
    }

    return {
      ...toRefs(data),
      handleAfterLeave,
      show,
      close,
      setText,
    }
  },
})
</script>

<style></style>
