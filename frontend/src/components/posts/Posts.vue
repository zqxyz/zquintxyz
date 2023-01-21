<script setup lang="ts">
import { onMounted } from 'vue';
import { globalState } from '../../store';
import { postsService } from '../../services/posts.service';
import loadingIndicator from '../loading-indicator.vue';
import Post from './Post.vue';

const state = globalState.value;

onMounted(() => {
  state.activePage = 'Home';
  postsService.loadAllPosts();
});
</script>

<template>
  <section>
    <loadingIndicator v-if="state.posts.length === 0" />
    <Post
      v-for="post in state.posts"
      v-else
      :key="post.id"
      :post="post"
      body-class="line-clamp-3"
    />
  </section>
</template>
