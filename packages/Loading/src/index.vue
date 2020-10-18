<template>
  <transition name="rol-loading-fade">
    <div class="rol-loading-mask">
      <div class="rol-loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" />
        </svg>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolLoading',
})
</script>

<style></style>
