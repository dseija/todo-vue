<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { isAValidEmail } from '../../common/utils';
import { userRegister } from './userService';

const router = useRouter();

const firstname = ref('');
const lastname = ref('');
const username = ref('');
const password = ref('');
const submitting = ref(false);
const submitted = ref(false);
const errorMessage = ref('');

const isUsernameInvalid = () =>
  Boolean(
    (submitted.value && !username.value) ||
      (username.value && !isAValidEmail(username.value))
  );

const isPasswordInvalid = () =>
  Boolean(
    (submitted.value && !password.value) ||
      (password.value && password.value.length < 6)
  );

const isFormValid = () =>
  Boolean(
    firstname.value &&
      lastname.value &&
      !isUsernameInvalid() &&
      !isPasswordInvalid()
  );

const onSubmit = async () => {
  if (isFormValid()) {
    errorMessage.value = '';
    submitting.value = true;

    const [err, user] = await userRegister({
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      password: password.value,
    });

    if (user) {
      console.log('user registered!');
      router.replace({ path: '/signin/register/success' });
    } else {
      errorMessage.value =
        err.response?.status === 409
          ? 'An account with that email already exists.'
          : 'Unexpected error, please try again.';
    }

    submitting.value = false;
  }
  submitted.value = true;
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="firstname" placeholder="First Name" />
    <input type="text" v-model="lastname" placeholder="Last Name" />
    <input type="text" v-model="username" placeholder="Email Address" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Sign Up</button>
  </form>
  <router-link to="/signin">Already have an account? Sign in</router-link>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
</template>
