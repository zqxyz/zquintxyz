<script lang="ts" setup>
import { globalState } from '../store';
import PostsComponent from '../components/PostsComponent.vue';

console.log('huh');
</script>

<template>
  <div>
    <div class="text-center text-sm text-gray-400 italic font-mono">
      zquint.xyz -- <span class="text-black">{{ globalState.status }}</span>
    </div>
    <PostsComponent />
  </div>
</template>
