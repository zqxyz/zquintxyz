<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { globalState } from '../store';
import { postsService } from '../services/posts.service';
import Post from '../components/posts/Post.vue';
import { useRoute } from 'vue-router';
import { PostType } from '../types';

const route = useRoute();

const state = globalState.value;
const thisPost = ref<PostType>(null);

const id = parseInt(route.params.id as string);

function loadPost() {
  postsService
    .getPost(id)
    .then((response: { data: PostType }) => {
      thisPost.value = response.data;
      state.status = 'ready';
    })
    .catch((error) => {
      console.error(error.message);
      state.status = 'error';
    });
}

function postInState(postId: number) {
  return state.posts.find((post) => post.id === postId);
}

watch(
  () => thisPost.value,
  () => {
    state.activePage = (thisPost.value?.title || 'Post') + ' — zquint.xyz';
  },
);

onMounted(() => {
  state.status = 'loading';
  if (postInState(id)) {
    thisPost.value = postInState(id);
    state.status = 'ready';
  } else {
    loadPost();
  }
});
</script>

<template>
  <section>
    <Post
      v-if="thisPost !== null"
      :title="thisPost.title"
      :body="thisPost.body"
      :timestamp="thisPost.timestamp"
      :post-id="thisPost.id"
    />
  </section>
</template>
