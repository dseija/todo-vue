<script setup lang="ts">
import { useSettingsStore } from '../settings';
import SideBar from './SideBar.vue';

const settingsStore = useSettingsStore();
</script>

<template>
  <SideBar />
  <main>
    <p>Theme: {{ settingsStore.settings.themeMode }}</p>

    <slot></slot>
  </main>
</template>
