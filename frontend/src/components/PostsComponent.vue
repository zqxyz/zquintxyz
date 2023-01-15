<script setup lang="ts">
import { onMounted } from 'vue';
import { globalState } from '../store';
import { postsService, Response } from '../services/posts.service';

onMounted(() => {
  globalState.value.status = 'loading';
  postsService
    .getAllPosts()
    .then((response: Response) => {
      if (response.data.length === 0) {
        throw new Error('No posts found');
      }
      globalState.value.posts = response?.data;
      globalState.value.status = 'ready';
    })
    .catch((error) => {
      console.error(error.message);
      globalState.value.status = 'error';
    });
});
</script>

<template>
  <div>
    <div v-if="globalState.status === 'ready'">
      <div
        v-for="post in globalState.posts"
        :key="post.id"
      >
        <h1 class="mb-2 text-3xl font-semibold">
          {{ post.title }}
        </h1>
        <div class="my-2 text-sm">
          {{ post.timestamp }}
        </div>
        <p class="text-xl">
          {{ post.body }}
        </p>
      </div>
    </div>
    <div v-else-if="globalState.status === 'loading'">
      <p>Loading...</p>
    </div>
    <div v-else-if="globalState.status === 'error'">
      <p>Error</p>
    </div>
  </div>
</template>

<style>
.prose a {
  @apply text-gray-900 underline !important;
}
</style>
