<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setUserSessionCookies } from './userHelpers';
import { userLogin } from './userService';

const { extraAction } = defineProps<{ extraAction?: () => void }>();

const router = useRouter();

const username = ref('');
const password = ref('');
const submitting = ref(false);
const submitted = ref(false);
const errorMessage = ref('');
const errorShow = ref(false);

const isFormValid = () => Boolean(username.value && password.value);

const onSubmit = async () => {
  if (isFormValid()) {
    errorMessage.value = '';
    submitting.value = true;

    const [err, user] = await userLogin({
      username: username.value,
      password: password.value,
    });

    if (user && user.token) {
      setUserSessionCookies(user);

      if (extraAction) await extraAction();

      router.replace({ path: '/' });
    } else {
      errorMessage.value =
        err.response?.status === 401
          ? 'Wrong username or password.'
          : 'Unexpected error, please try again.';

      errorShow.value = true;
    }

    submitting.value = false;
  }

  submitted.value = true;
};
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-text-field
      variant="outlined"
      label="Email Address*"
      :readonly="submitting"
      :rules="[(v) => !!v || 'Email Address is required']"
      v-model="username"
    />
    <v-text-field
      variant="outlined"
      type="password"
      label="Password*"
      :readonly="submitting"
      :rules="[(v) => !!v || 'Password is required']"
      v-model="password"
    />
    <v-btn type="submit" block color="primary" :disabled="submitting"
      >Sign In
      <v-progress-circular
        v-if="submitting"
        class="ml-2"
        indeterminate
        size="20"
    /></v-btn>
  </v-form>
  <div class="d-flex w-100 flex-row-reverse mt-4">
    <router-link class="text-decoration-none" to="/signup"
      >Don't have an account? Sign Up</router-link
    >
  </div>

  <v-snackbar v-model="errorShow" :timeout="5000" location="top">
    {{ errorMessage }}
    <template v-slot:actions>
      <v-btn color="error" variant="text" @click="() => (errorShow = false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
