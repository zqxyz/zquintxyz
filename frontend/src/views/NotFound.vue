<script lang="ts" setup>
import { onMounted } from 'vue';
import { globalState } from '../store';

onMounted(() => {
  globalState.value.status = 'error';
  globalState.value.activePage = -1;
});
</script>

<template>
  <div class="prose max-w-none">
    <h1>404</h1>
    <p>
      Lamb sauce not located. Return
      <router-link
        to="/"
        text="home"
      />.
    </p>
  </div>
</template>
