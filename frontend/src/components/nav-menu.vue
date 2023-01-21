<script lang="ts" setup>
import { globalState } from '../store';
import { computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPineTree } from '@mdi/js';

const activePage = computed(() => globalState.value.activePage);

const Pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Meta',
    path: '/meta',
  },
];
</script>

<template>
  <aside>
    <ul class="list-none pt-2 md:pt-0">
      <li
        v-for="page in Pages"
        :key="page.name"
        class="mb-1 text-gray-700 dark:text-gray-200 text-xl inline-block lg:block"
      >
        <Transition>
          <svg-icon
            v-if="activePage === page.name"
            type="mdi"
            :size="18"
            class="inline mx-1 fade text-gray-700 dark:text-gray-300"
            :path="mdiPineTree"
          />
        </Transition>
        <router-link
          :to="page.path"
          :class="{ active: activePage === page.name, 'aside-link': true }"
          :text="page.name"
        />
      </li>
    </ul>
  </aside>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: width 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0;
  margin: 0 !important;
}

.aside-link {
  @apply transition-all rounded-md p-1 lg:p-0 hover:p-1 lg:hover:-mr-1 active:p-1 hover:bg-gray-300 active:bg-[#b8b8b8];
  @apply dark:hover:bg-gray-700 dark:active:bg-gray-500;
}
.active {
  @apply font-semibold text-gray-800 dark:text-gray-100;
}
</style>
