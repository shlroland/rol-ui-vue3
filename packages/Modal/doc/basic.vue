<template>
  123211
  <Modal title="modal组件" :center="true" :visible="true">
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
}
</script>

<style></style>
