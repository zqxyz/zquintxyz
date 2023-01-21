<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { globalState } from '../store';

onMounted(() => {
  globalState.value.activePage = 'Meta';
});

const isLightMode = computed(() => globalState.value.darkMode !== 'dark');
</script>

<template>
  <article>
    <h1 class="block mb-6">
      Meta
    </h1>

    <ul class="meta-list">
      <li>
        <strong>Hosted</strong>
        on AWS
      </li>
      <li>
        <strong>Made with</strong> Vue, Node, TypeScript, Express, and MySQL
      </li>
      <li v-if="isLightMode">
        <strong>
          <a href="https://unsplash.com/photos/Ndz3w6MCeWc">Background image</a>
        </strong>
        by
        <a href="https://unsplash.com/@krisijanis">Krisjanis Mezulis</a>
      </li>
    </ul>
  </article>
</template>

<style scoped>
a {
  @apply text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white underline;
}
</style>
