<template>
  <ul class="rol-pager">
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
    <li v-if="showPrevMore" :class="['rol-icon more btn-quickprev', { disabled }]"></li>
    <li v-for="pager in pagers" :key="pager" :class="{ active: currentPage === pager, disabled }" class="number">
      {{ pager }}
    </li>
    <li v-if="showPrevMore" :class="['rol-icon more btn-quickprev', { disabled }]"></li>
    <li v-if="pageCount > 1" :class="{ active: currentPage === pageCount, disabled }" class="number">
      {{ pageCount }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'RolPager',
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
  setup(props, { emit }) {
    const pagers = computed(() => {
      const pagerCount = props.pagerCount
      const halfPagerCount = (pagerCount - 1) / 2
      const currentPage = Number(props.currentPage)
      const pageCount = Number(props.pageCount)

      console.log(props)

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

    return {
      pagers,
    }
  },
})
</script>

<style></style>
