<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { postsService } from '../services/posts.service';

interface Post {
  id: number;
  title: string;
  body: string;
  timestamp: string;
}

interface Response {
  data: Post[];
}

enum status {
  idle = 'idle',
  loading = 'loading',
  ready = 'ready',
  error = 'error',
}

const state = ref({
  posts: [] as Post[],
  status: status.idle,
});

onMounted(() => {
  state.value.status = status.loading;
  postsService
    .getAllPosts()
    .then((response: Response) => {
      state.value.posts = response?.data;
      state.value.status = status.ready;
    })
    .catch((error: Error) => {
      console.error(error.message);
      state.value.status = status.error;
    });
});
</script>

<template>
  <div v-if="state.status === status.ready">
    posts:
    <div
      v-for="post in state.posts"
      :key="post.id"
    >
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
  <div v-else-if="state.status === status.loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="state.status === status.error">
    <p>Error</p>
  </div>
</template>

<style>
.prose a {
  @apply text-gray-900 underline !important;
}
</style>
