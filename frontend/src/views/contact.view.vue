<script lang="ts" setup>
import { onMounted } from 'vue';
import { globalState } from '../store';

onMounted(() => {
  globalState.value.activePage = 'Contact';
});
</script>

<template>
  <article>
    <h1 class="block mb-6">
      Contact
    </h1>

    <p class="font-mono">
      const email = `work@${process.env.DOMAIN}`
    </p>
  </article>
</template>
