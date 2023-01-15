<script lang="ts" setup>
import DOMPurify from 'dompurify';
import { marked } from 'marked';
const props = defineProps<{
  title: string | number;
  body: string | number;
  timestamp: string | number;
}>();

const markedPurifiedBody = DOMPurify.sanitize(marked.parse(props.body));
</script>

<template>
  <article>
    <h1 class="mb-2 text-3xl font-semibold">
      {{ props.title }}
    </h1>
    <div class="my-2 text-sm">
      {{ props.timestamp }}
    </div>
    <p
      class="text-xl"
      v-html="markedPurifiedBody"
    />
  </article>
</template>
