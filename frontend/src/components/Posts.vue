<script setup lang="ts">
import { onMounted } from 'vue';
import { globalState } from '../store';
import { postsService, Response } from '../services/posts.service';
import Post from '../components/Post.vue';

const state = globalState.value;

onMounted(() => {
  state.status = 'loading';
  postsService
    .getAllPosts()
    .then((response: Response) => {
      if (response.data.length === 0) {
        throw new Error('No posts found');
      }
      state.posts = response.data;
      state.status = 'ready';
    })
    .catch((error) => {
      console.error(error.message);
      state.status = 'error';
    });
});
</script>

<template>
  <section>
    <article
      v-for="post in globalState.posts"
      :key="post.id"
    >
      <Post
        :title="post.title"
        :body="post.body"
        :timestamp="post.timestamp"
      />
    </article>
    <div v-if="globalState.status === 'loading'">
      <p>Loading...</p>
    </div>
    <div v-else-if="globalState.status === 'error'">
      <p>Error</p>
    </div>
  </section>
</template>
