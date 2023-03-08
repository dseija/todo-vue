<script setup lang="ts">
import { UserSignupForm } from '../features/user';
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-responsive
      max-width="396"
      content-class="d-flex flex-column align-center"
    >
      <v-avatar color="secondary" class="mt-14">
        <v-icon icon="mdi-account"></v-icon>
      </v-avatar>
      <h2 class="text-h5 mt-2 mb-6">Sign up</h2>
      <UserSignupForm />
    </v-responsive>
  </v-container>
</template>
