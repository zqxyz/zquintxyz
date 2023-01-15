<script lang="ts" setup>
import { globalState } from '../store';
import PostsComponent from '../components/Posts.vue';
</script>

<template>
  <main>
    <div class="text-center text-sm text-gray-400 italic font-mono">
      zquint.xyz <span class="text-black">{{ globalState.status }}</span>
    </div>
    <PostsComponent />
    <div class="mt-8">
      <h1 class="text-3xl font-semibold mb-2">
        To do:
      </h1>
      <ul>
        <li>Add a Write Post page</li>
        <li>Implement style</li>
        <li>Implement cognito admin account</li>
        <li>Refactor everything</li>
        <li>Set up deploy process</li>
        <li>Add projects page</li>
      </ul>
    </div>
  </main>
</template>
