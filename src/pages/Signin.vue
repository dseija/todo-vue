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
const successShow = ref(action === 'register' && status === 'success');

const fetchSettings = async () => {
  const [err, settings] = await getSettings();
  console.log('hey, I will try to save these settings:', settings);
  if (settings) saveSettings(settings);
};
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
      <h2 class="text-h5 mt-2 mb-6">Sign in</h2>
      <UserSigninForm :extra-action="fetchSettings" />

      <v-snackbar v-model="successShow" :timeout="5000" location="top">
        {{ successMessage }}
        <template v-slot:actions>
          <v-btn
            color="success"
            variant="text"
            @click="() => (successShow = false)"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-responsive>
  </v-container>
</template>
