<template>
  <div> </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'RolMsgBox',
  props: {
    openDelay: {
      type: Boolean,
      default: false,
    },
    closeDelay: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
    modalClass: {
      type: String,
      default: '',
    },
    modalAppendToBody: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    center: {
      default: false,
      type: Boolean,
    },
    roundButton: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    //   cnst state = reactive
  },
})
</script>

<style></style>
