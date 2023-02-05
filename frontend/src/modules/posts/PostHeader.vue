<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="to">
    <h1 class="hover:underline">
      {{ title }}
    </h1>
  </router-link>
</template>
