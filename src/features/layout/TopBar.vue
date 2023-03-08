<script setup lang="ts">
import { layoutState } from './layoutState';
</script>

<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      class="d-lg-none"
      variant="text"
      @click.stop="() => layoutState.toggleSidebar()"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>TODO Vue App</v-toolbar-title>
  </v-app-bar>
</template>
