<template>
  <button
    type="button"
    className="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden"
    @click="toggleNavIsOpen"
  >
    <span className="sr-only">Open site navigation</span>
    <svg
      width="24"
      height="24"
      fill="none"
      :class="[
        'absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform',
        {
          'opacity-0 scale-80': navIsOpen,
        },
      ]"
    >
      <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg
      width="24"
      height="24"
      fill="none"
      :class="[
        'absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform',
        {
          'opacity-0 scale-80': !navIsOpen,
        },
      ]"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    navIsOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:navIsOpen'],
  methods: {
    toggleNavIsOpen() {
      this.$emit('update:navIsOpen', !this.navIsOpen)
    },
  },
})
</script>
