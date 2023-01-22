<script lang="ts" setup>
import PostHeader from './PostHeader.vue';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { computed, PropType } from 'vue';
import { PostType } from '../../types';

const props = defineProps({
  post: {
    type: Object as PropType<PostType>,
    required: true,
  },
  bodyClass: {
    type: String,
    required: false,
    default: '',
  },
});

const timestamp = props.post?.timestamp
  ? new Date(props.post.timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  : '';

const markedPurifiedBody = computed(() =>
  DOMPurify.sanitize(marked.parse(props.post?.body || ''), {
    USE_PROFILES: { html: true },
  }),
);
</script>

<template>
  <article class="mb-12 last-of-type:mb-6 last-of-type:mb-0">
    <PostHeader
      :to="`/post/${props.post?.id}`"
      :title="props.post?.title"
    />
    <div class="my-2 text-lg text-gray-800 font-mono dark:text-gray-200">
      {{ timestamp }}
    </div>
    <div
      :class="'body-class ' + props.bodyClass"
      v-html="markedPurifiedBody"
    />
  </article>
</template>

<style>
.body-class {
  @apply mb-6 last-of-type:mb-0 break-inside-avoid;
  @apply text-xl md:text-2xl leading-8 md:leading-9 text-gray-800 dark:text-gray-100;
}

.body-class p {
  @apply mb-3 last-of-type:mb-0;
}
</style>
