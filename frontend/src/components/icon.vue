<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon';

defineProps({
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: false,
    default: 18,
  },
  controlClass: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <svg-icon
    type="mdi"
    :size="size"
    :class="`inline mx-1 fade text-gray-700 dark:text-gray-100 relative -top-[2px] ${controlClass}`"
    :path="path"
  />
</template>
