<script setup lang="ts">
import { ref } from 'vue';
import { userLogin } from './userService';

const username = ref('');
const password = ref('');
const submitting = ref(false);
const submitted = ref(false);
const errorMessage = ref('');

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
      console.log('user logged in!');
    } else {
      errorMessage.value =
        err.response?.status === 401
          ? 'Wrong username or password.'
          : 'Unexpected error, please try again.';
    }

    submitting.value = false;
  }

  submitted.value = true;
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="username" placeholder="Email Address" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Sign In</button>
  </form>
  <a href="/signup">Don't have an account? Sign Up</a>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
</template>
