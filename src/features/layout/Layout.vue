<script setup lang="ts">
import SideBar from './SideBar.vue';
import TopBar from './TopBar.vue';
</script>

<template>
  <v-layout>
    <TopBar />
    <SideBar />
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
