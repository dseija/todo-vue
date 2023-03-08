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
const errorShow = ref(false);

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

      errorShow.value = true;
    }

    submitting.value = false;
  }
  submitted.value = true;
};
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-row>
      <v-col>
        <v-text-field
          variant="outlined"
          label="Last Name*"
          :readonly="submitting"
          :rules="[(v) => !!v || 'Last Name is required']"
          v-model="firstname"
        />
      </v-col>
      <v-col>
        <v-text-field
          variant="outlined"
          label="First Name*"
          :readonly="submitting"
          :rules="[(v) => !!v || 'First Name is required']"
          v-model="lastname"
        />
      </v-col>
    </v-row>
    <v-text-field
      variant="outlined"
      label="Email Address*"
      :readonly="submitting"
      :rules="[(v) => !!v || 'Email Address is required']"
      v-model="username"
    />
    <v-text-field
      type="password"
      variant="outlined"
      label="Password*"
      :readonly="submitting"
      :rules="[(v) => !!v || 'Password is required']"
      v-model="password"
    />
    <v-btn type="submit" block color="primary" :disabled="submitting"
      >Sign Up
      <v-progress-circular
        v-if="submitting"
        class="ml-2"
        indeterminate
        size="20"
    /></v-btn>
  </v-form>
  <div class="d-flex w-100 flex-row-reverse mt-4">
    <router-link class="text-decoration-none" to="/signin"
      >Already have an account? Sign in</router-link
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
