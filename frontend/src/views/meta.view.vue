<script lang="ts" setup>
import { onMounted } from 'vue';
import { globalState } from '../store';

onMounted(() => {
  globalState.value.activePage = 'Meta';
});
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
    </ul>
  </article>
</template>

<style scoped>
a {
  @apply text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white underline;
}
</style>
