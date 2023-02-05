<script lang="ts" setup>
import { onMounted } from 'vue';
import { globalState } from '../store';

onMounted(() => {
  globalState.value.status = 'error';
  globalState.value.activePage = null;
});
</script>

<template>
  <article>
    <h1 class="block mb-6">
      I can't find that page
    </h1>

    <p>
      <strong>404</strong> errors are HTTP status codes sent from a server. This
      is different: I'm not even asking the server for this page because I know
      it doesn't exist. Colloquially, this is a 404. Technically, this is more
      like a prevention of a 404.
    </p>
    <p>
      I'm confident many of the "404" errors you see are actually 200s that
      return a fake 404 page since it conveys the same practical meaning.
    </p>
    <p>
      Anyway, you can restart your journey at the
      <router-link
        to="/"
        text="home page"
        class="font-semibold"
      />.
    </p>
  </article>
</template>

<style scoped>
a {
  @apply text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white underline;
}

p {
  @apply mb-4 last-of-type:mb-0;
}
</style>
