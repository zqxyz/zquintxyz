<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { globalState } from '../../store';
import { postsService } from './posts.service';
import loadingIndicator from '../../components/loading-indicator.vue';
import Post from './Post.vue';

const state = globalState.value;

const sortedPosts = computed(() => {
  return [...state.posts].sort((a, b) => b.timestamp - a.timestamp);
});

onMounted(() => {
  state.activePage = 'Home';
  console.log(import.meta.env.VITE_API_PATH);
  postsService.loadAllPosts();
});
</script>

<template>
  <section>
    <loadingIndicator v-if="state.posts.length === 0" />
    <Post
      v-for="post in sortedPosts"
      v-else
      :key="post.id"
      :post="post"
      body-class="line-clamp-3"
    />
  </section>
</template>
