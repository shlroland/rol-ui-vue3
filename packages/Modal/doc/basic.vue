<template>
  <span @click="visible = !visible">123211</span>
  <Modal v-model:visible="visible" :open-delay="5000" title="modal组件">
    <template #footer>
      <button class="rol-button is-success">Save changes</button>
      <button class="rol-button">Cancel</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@rol-ui/modal'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style></style>
