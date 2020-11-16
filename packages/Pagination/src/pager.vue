<template>
  <ul class="rol-pager" @click="onPagerClick">
    <li
      v-if="pageCount > 0"
      :class="{
        active: currentPage === 1,
        disabled,
        number: true,
      }"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="['more btn-quickprev', { disabled }]"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'ellipsis-h'"
    >
      <Icon class="more quickprev" :name="quickprevIconClass"></Icon>
    </li>
    <li v-for="pager in pagers" :key="pager" :class="{ active: currentPage === pager, disabled }" class="number">
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="['more btn-quicknext', { disabled }]"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'ellipsis-h'"
    >
      <Icon class="more quicknext" :name="quicknextIconClass"></Icon>
    </li>
    <li v-if="pageCount > 1" :class="{ active: currentPage === pageCount, disabled }" class="number">
      {{ pageCount }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect, ref } from 'vue'
import Icon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolPager',
  components: {
    Icon,
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 50,
    },
    pagerCount: {
      type: Number,
      default: 7,
    },
    disabled: Boolean,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const showPrevMore = ref(false)
    const showNextMore = ref(false)
    const quicknextIconClass = ref('ellipsis-h')
    const quickprevIconClass = ref('ellipsis-h')
    const pagers = computed(() => {
      const pagerCount = props.pagerCount
      const halfPagerCount = (pagerCount - 1) / 2
      const currentPage = Number(props.currentPage)
      const pageCount = Number(props.pageCount)

      let showPrevMore = false
      let showNextMore = false
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true
        }
      }
      const array = []
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i)
        }
      }
      return array
    })

    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2

      showPrevMore.value = false
      showNextMore.value = false

      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true
        }
      }
    })

    const onPagerClick = (event: UIEvent) => {
      const target = event.target as HTMLOrSVGElement
      if (target.tagName.toLowerCase() === 'ul' || props.disabled) return

      let newPage = Number(target.textContent)

      const pageCount = props.pageCount
      const currentPage = props.currentPage
      const pagerCountOffset = props.pagerCount - 2
      if (target.className.includes('more')) {
        if (target.className.includes('quickprev')) {
          newPage = currentPage - pagerCountOffset
        } else if (target.className.includes('quicknext')) {
          newPage = currentPage + pagerCountOffset
        }
      }
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
        }
        if (newPage > pageCount) {
          newPage = pageCount
        }
      }
      if (newPage !== currentPage) {
        emit('change', newPage)
      }
    }

    const onMouseenter = (direction: 'left' | 'right') => {
      if (props.disabled) return
      if (direction === 'left') {
        quickprevIconClass.value = 'angle-double-left'
      } else {
        quicknextIconClass.value = 'angle-double-right'
      }
    }

    return {
      pagers,
      showPrevMore,
      showNextMore,
      onPagerClick,
      quicknextIconClass,
      quickprevIconClass,
      onMouseenter,
    }
  },
})
</script>

<style></style>
