<template>
  <div>
    <LoadingIns />
  </div>

  <Button>按 钮</Button>
</template>

<script lang="ts">
import { LoadingIns, directive as loading } from '@rol-ui/loading'
import Button from '@rol-ui/button'
import { defineComponent } from 'vue'
import directive from '../src/directive'

export default defineComponent({
  components: {
    LoadingIns,
    Button,
  },
  directives: {
    loading,
  },
})
</script>

<style></style>
