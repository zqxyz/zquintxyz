<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { globalState } from '../store';
import icon from './icon.vue';
import { mdiMoonWaxingCrescent, mdiWeatherSunny } from '@mdi/js';
import { DarkMode } from '../types';

const darkMode = ref<DarkMode>('light');

onMounted(() => {
  localStorage.getItem('dark-mode') === 'light'
    ? (darkMode.value = 'light')
    : (darkMode.value = 'dark');
  updateDarkMode();
});

watch(
  () => darkMode.value,
  () => {
    updateDarkMode();
    globalState.value.darkMode = darkMode.value;
  },
);

function updateDarkMode() {
  darkMode.value === 'light' ? setLightMode() : setDarkMode();
}

const rootClassList = document.documentElement.classList;
const darkClasses = ['dark', 'dark-bg'];
const lightClasses = ['light-bg'];

function setLocalStorageDarkMode(mode: DarkMode) {
  localStorage.setItem('dark-mode', mode);
}

function setLightMode() {
  rootClassList.remove(...darkClasses);
  rootClassList.add(...lightClasses);
  setLocalStorageDarkMode('light');
}

function setDarkMode() {
  rootClassList.remove(...lightClasses);
  rootClassList.add(...darkClasses);
  setLocalStorageDarkMode('dark');
}

function toggleDarkMode() {
  darkMode.value === 'light'
    ? (darkMode.value = 'dark')
    : (darkMode.value = 'light');
}
</script>

<template>
  <div
    id="dark-toggle"
    class="text-right"
  >
    <button
      class="relative rounded-full px-[3px] my-auto hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-400 dark:active:bg-gray-600 transition-all duration-200 ease-in-out"
      @click="toggleDarkMode"
    >
      <Transition>
        <icon
          v-if="darkMode === 'light'"
          :path="mdiMoonWaxingCrescent"
        />
        <icon
          v-else
          :path="mdiWeatherSunny"
        />
      </Transition>
    </button>
  </div>
</template>

<style>
/* vue transition */
.v-enter-active,
.v-leave-active {
  transition: width 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>