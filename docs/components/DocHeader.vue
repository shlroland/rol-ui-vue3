<template>
  <header class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
    <div
      class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center justify-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72"
    >
      <a class="overflow-hidden w-10 md:w-auto flex-row justify-center">
        <img class="w-8 md:w-12 lg:w-12 h-8 md:h-12 lg:h-12" src="../assets/logo/logo.png" alt="#" />
      </a>
    </div>
    <div
      class="h-20 flex-auto border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"
    >
      <button
        type="button"
        class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span> Quick search<span class="hidden sm:inline"> for anything</span> </span>
        <span class="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
          <span class="sr-only">Press </span>
          <kbd class="font-sans">
            <abbr title="actionKey[1]" class="no-underline">
              {actionKey[0]}
            </abbr>
          </kbd>
          <span class="sr-only"> and </span>
          <kbd class="font-sans">K</kbd>
          <span class="sr-only"> to search</span>
        </span>
      </button>
      <div class="flex items-center space-x-6">
        <a
          href="https://github.com/shlroland/rol-ui-vue3"
          class="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          target="blank"
        >
          <span class="sr-only">rol-ui on GitHub</span>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { isDark } from '../store'

export default defineComponent({
  components: {},
  setup() {
    // 12312312
  },
})
</script>
