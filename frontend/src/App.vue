<script lang="ts" setup>
import { globalState } from './store';
import { computed } from 'vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

const status = computed(() => globalState.value.status);
</script>

<template>
  <div
    class="max-w-5xl mx-auto p-6 pb-16"
  >
    <Header :status="status" />
    <div class="flex flex-row space-x-12">
      <div class="flex flex-col w-1/5">
        <Menu />
      </div>
      <div class="flex flex-col w-4/5">
        <router-view v-slot="{ Component, route }">
          <transition>
            <component
              :is="Component"
              :key="route.path"
            />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style>
.v-enter-active {
  transition: filter 0.4s ease-out;
}

.v-enter-from {
  @apply blur-[1px];
}
</style>
