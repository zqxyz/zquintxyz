<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { globalState } from '../../store';
import { postsService } from './Posts.service';
import loadingIndicator from '../loading-indicator.vue';
import Post from './Post.vue';

const state = globalState.value;

const sortedPosts = computed(() => {
  return [...state.posts].sort((a, b) => b.timestamp - a.timestamp);
});

onMounted(() => {
  state.activePage = 'Home';
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
