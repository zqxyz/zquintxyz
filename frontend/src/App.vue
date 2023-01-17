<script lang="ts" setup>
import { globalState } from './store';
import { computed } from 'vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

const status = computed(() => globalState.value.status);
</script>

<template>
  <div
    class="transition-all max-w-3xl lg:max-w-5xl mx-auto p-6 pb-16 md:px-8 lg:px-12 shadow-sm lg:rounded-sm lg:translate-y-[100px] lg:mb-[200px] cement-bg"
  >
    <Header :status="status" />
    <div class="flex flex-col lg:flex-row lg:space-x-12">
      <div class="flex flex-col mb-4 text-center lg:mb-0 lg:text-right lg:w-1/5">
        <Menu />
      </div>
      <div class="flex flex-col lg:w-4/5">
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
  @apply blur-[1px] break-inside-avoid;
}

.cement-bg {
  @apply bg-gray-50;
  /* @apply bg-gray-50 bg-cover bg-no-repeat bg-[center_top] bg-fixed bg-[url('https://zquintxyz-public.s3.us-east-1.amazonaws.com/cement-texture.jpg')]; */
}
</style>
