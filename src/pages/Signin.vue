<script setup lang="ts">
import { ref } from 'vue';
import { getSettings, saveSettings } from '../features/settings';
import { UserSigninForm } from '../features/user';

const { action, status } = defineProps<{ action?: string; status?: string }>();
const successMessage = ref(
  action === 'register' && status === 'success'
    ? 'Your account has been created! Now you can sign in.'
    : ''
);

const fetchSettings = async () => {
  const [err, settings] = await getSettings();
  console.log('hey, I will try to save these settings:', settings);
  if (settings) saveSettings(settings);
};
</script>

<template>
  <h2>Sign in</h2>
  <UserSigninForm :extra-action="fetchSettings" />
  <p v-if="successMessage">{{ successMessage }}</p>
</template>
