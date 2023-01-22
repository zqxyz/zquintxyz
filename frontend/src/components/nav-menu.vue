<script lang="ts" setup>
import { globalState } from '../store';
import { computed } from 'vue';
import icon from './icon.vue';
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
          <icon
            v-if="activePage === page.name"
            :path="mdiPineTree"
            control-class="dark:text-[#4f0]"
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
.aside-link {
  @apply p-1 lg:p-0 hover:p-1 lg:hover:-mr-1 active:p-1;
  @apply transition-all rounded-md hover:bg-gray-300 active:bg-[#b8b8b8];
  @apply dark:hover:bg-gray-700 dark:active:bg-gray-800;
}
.active {
  @apply font-semibold text-gray-800 dark:text-gray-100;
}
</style>
