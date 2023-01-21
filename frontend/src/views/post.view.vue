<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue';
import { globalState } from '../store';
import { postsService } from '../services/posts.service';
import Post from '../components/posts/Post.vue';
import { useRoute } from 'vue-router';
import { PostType } from '../types';

const state = globalState.value;
const thisPost = ref({} as PostType | null);
const route = useRoute();
const id = parseInt(route.params.id as string);

const postInState = computed(() => {
  return state.posts.find((post) => post.id === id);
});

watch(
  () => thisPost.value,
  () => {
    state.activePage = (thisPost.value?.title || 'Post') + ' — zquint.xyz';
  },
);

onMounted(async () => {
  if (postInState.value) {
    thisPost.value = postInState.value;
  } else {
    thisPost.value = await postsService.getPost(id);
  }
});
</script>

<template>
  <section>
    <Post
      v-if="thisPost !== null"
      :key="thisPost.id"
      :post="thisPost"
    />
  </section>
</template>
