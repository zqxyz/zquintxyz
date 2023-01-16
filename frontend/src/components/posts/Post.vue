<script lang="ts" setup>
import PostHeader from './PostHeader.vue';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
const props = defineProps<{
  title: string;
  body: string;
  timestamp: number;
  postId: number;
}>();

const timestamp = props.timestamp
  ? new Date(props.timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  : '';
const markedPurifiedBody = DOMPurify.sanitize(marked.parse(props.body || ''));
</script>

<template>
  <article class="mb-6 last-of-type:mb-0">
    <PostHeader
      :to="`/post/${props.postId}`"
      :title="props.title"
    />
    <span class="my-2 text-sm text-gray-500 font-semibold">
      {{ timestamp }}
    </span>
    <p
      class="text-xl"
      v-html="markedPurifiedBody"
    />
  </article>
</template>

<style>
article {
  @apply mb-6;
}
</style>
