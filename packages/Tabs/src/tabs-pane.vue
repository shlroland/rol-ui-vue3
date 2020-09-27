<template>
  <div
    v-if="shouldBeRender"
    v-show="active"
    :id="`pane-${paneName}`"
    class="rol-tabs-pane"
    role="tabpanel"
    :aria-hidden="!active"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, ref } from 'vue'
import { RPaneProps, RootTabs, UpdatePaneStateCallback } from './tabs'

export default defineComponent({
  name: 'TabsPane',
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean,
  },
  setup(props) {
    const index = ref<string>(null)
    const loaded = ref(false)
    const rootTabs = inject<RootTabs>('rootTabs')
    const updatePaneState = inject<UpdatePaneStateCallback>('updatePaneState')

    if (!rootTabs || !updatePaneState) {
      throw new Error(`TabPane must use with Tabs`)
    }

    const isClosable = computed(() => {
      return props.closable || rootTabs.props.closable
    })

    const active = computed(() => {
      const active = rootTabs.currentName.value === (props.name || index.value)
      if (active) {
        loaded.value = true
      }
      return active
    })

    const paneName = computed((): string => {
      return props.name || index.value
    })

    const shouldBeRender = computed(() => {
      return !props.lazy || loaded.value || active.value
    })

    const instance = getCurrentInstance()

    updatePaneState({
      uid: instance.uid,
      instance,
      props: props as RPaneProps,
      paneName,
      active,
      index,
      isClosable,
    })

    return {
      index,
      loaded,
      isClosable,
      active,
      paneName,
      shouldBeRender,
    }
  },
})
</script>

<style></style>
