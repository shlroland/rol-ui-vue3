<template>
  <div>
    <LoadingIns />
  </div>

  <Button>按 钮</Button>

  <Button @click="openFullScreen2">service</Button>
</template>

<script lang="ts">
import { LoadingIns, directive as loading, service } from '@rol-ui/loading'
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

  setup() {
    const openFullScreen2 = () => {
      const ins = service()

      setTimeout(() => {
        ins.close()
      }, 3000)
    }

    return {
      openFullScreen2,
    }
  },
})
</script>

<style></style>
