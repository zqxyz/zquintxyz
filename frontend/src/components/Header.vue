<script lang="ts" setup>
import { Status } from '../types';
defineProps({
  status: {
    type: String,
    required: true,
  },
});

const statusColor = new Map<Status, string>([
  ['idle', 'text-gray-600'],
  ['loading', 'text-orange-600'],
  ['ready', 'text-green-600'],
  ['error', 'text-red-600'],
]);
</script>

<template>
  <nav class="mb-8 text-center text-lg font-mono">
    <router-link
      to="/"
      class="transition-all text-gray-600 rounded-md hover:p-1 hover:bg-gray-200 active:p-1 active:bg-gray-300"
      text="zquint.xyz"
    />
    <span :class="`${statusColor.get(status)} ml-1`">{{ status }}</span>
  </nav>
</template>
