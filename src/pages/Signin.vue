<script setup lang="ts">
import { ref } from 'vue';
import { UserSigninForm } from '../features/user';

const { action, status } = defineProps<{ action?: string; status?: string }>();
const successMessage = ref(
  action === 'register' && status === 'success'
    ? 'Your account has been created! Now you can sign in.'
    : ''
);
</script>

<template>
  <h2>Sign in</h2>
  <UserSigninForm />
  <p v-if="successMessage">{{ successMessage }}</p>
</template>
