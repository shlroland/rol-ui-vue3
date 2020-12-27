<template>
  <aside
    role="sidebar"
    :class="[
      'fixed z-40 inset-0 flex-none  h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block',
    ]"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
    >
      <!-- <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"> </div> -->
      <nav
        class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 h-sidebar-height"
      >
        <ul>
          <li v-for="(item, index) in routes" :key="index" class="mt-8">
            <h5 :class="['px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-400']">
              {{ item.name }}
            </h5>
            <ul>
              <li v-for="(child, childIndex) in item.children" :key="index + childIndex">
                <router-link v-slot="{ href, navigate, isExactActive }" :to="`${item.path}/${child.path}`" custom>
                  <a
                    :class="[
                      'px-3 py-2 transition-colors duration-200 relative block cursor-pointer',
                      {
                        'text-green-700': isExactActive,
                        'hover:text-gray-900 text-gray-500': !isExactActive,
                      },
                    ]"
                    :href="href"
                    @click="navigate"
                  >
                    <span
                      :class="[
                        'bg-green-50 rounded-md absolute inset-0 ',
                        {
                          'opacity-50': isExactActive,
                          'opacity-0': !isExactActive,
                        },
                      ]"
                    ></span>
                    <span class="relative">{{ child.name }}</span>
                  </a>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { options } = useRouter()
    const routes = ref(options.routes.slice(1))

    return {
      routes,
    }
  },
}
</script>
