<script lang="ts" setup>
import { globalState } from '../store';
import { computed } from 'vue';

const activePage = computed(() => globalState.value.activePage);

const Pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Something else',
    path: '/fake',
  },
  {
    name: 'Another link',
    path: '/nope',
  },
];
</script>

<template>
  <aside>
    <ul class="list-none">
      <li
        v-for="page in Pages"
        :key="page.name"
        class="mb-1 text-gray-600 text-xl inline-block lg:block"
      >
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
  @apply transition-all rounded-md p-1 lg:p-0 hover:p-1 lg:hover:-mr-1 active:p-1 hover:bg-gray-200 active:bg-gray-300;
}
.active {
  @apply font-semibold text-gray-800;
}
</style>
