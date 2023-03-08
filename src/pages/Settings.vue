<script setup lang="ts">
import { Layout } from '../features/layout';
import { SettingsList } from '../features/settings';
</script>

<template>
  <Layout>
    <v-container class="d-flex justify-center">
      <v-responsive
        max-width="396"
        content-class="d-flex flex-column align-center"
      >
        <h2 class="text-h4 mt-4 mb-4">Settings</h2>
        <SettingsList />
      </v-responsive>
    </v-container>
  </Layout>
</template>
