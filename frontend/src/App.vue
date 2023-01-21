<script lang="ts" setup>
import { globalState } from './store';
import { watch } from 'vue';
import navMenu from './components/nav-menu.vue';
import darkToggle from './components/dark-toggle.vue';

watch(
  () => globalState.value.activePage,
  () => {
    document.title = globalState.value.activePage
      ? globalState.value.activePage
      : 'zquint.xyz';
  },
);
</script>

<template>
  <main>
    <div class="containerClass">
      <dark-toggle />
      <div class="flex flex-col lg:flex-row lg:space-x-4">
        <div
          class="flex flex-col mb-8 text-center lg:mb-0 lg:text-right lg:w-1/6"
        >
          <navMenu />
        </div>
        <div class="flex flex-col lg:w-4/6 p-6 pt-0 rounded-l-md">
          <router-view v-slot="{ Component, route }">
            <component
              :is="Component"
              :key="route.path"
            />
          </router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.containerClass {
  @apply mx-auto p-1 md:p-6 xl:mb-[200px];
  @apply w-full xl:max-w-5xl xl:translate-y-[100px];
  @apply bg-[#dedede] dark:bg-[#181817];
  @apply xl:dark:outline xl:dark:outline-[#ffbf00] xl:dark:outline-1;
  @apply transition-all xl:rounded-lg;
}
</style>
