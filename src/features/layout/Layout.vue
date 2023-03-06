<script setup lang="ts">
import SideBar from './SideBar.vue';
</script>

<template>
  <SideBar />
  <main>
    <slot></slot>
  </main>
</template>
