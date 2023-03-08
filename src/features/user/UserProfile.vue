<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { clearUserCookies, getUserData, UserData } from '../user';

const router = useRouter();
const loading = ref(true);
const user = ref<UserData>();

const fetchUserData = async () => {
  loading.value = true;
  const [err, userData] = await getUserData();
  if (err && err.response?.status === 401) {
    clearUserCookies();
    router.replace('/signin');
  }

  if (userData) user.value = { ...userData };
  loading.value = false;
};

onMounted(() => {
  fetchUserData();
});
</script>

<template>
  <v-progress-circular
    v-if="loading"
    class="mt-4 mb-8"
    color="primary"
    indeterminate
    size="64"
  />

  <v-avatar
    v-if="!loading && user"
    color="secondary"
    class="mt-4 mb-8"
    size="96"
  >
    <v-icon icon="mdi-account" size="64" />
  </v-avatar>
  <v-list v-if="!loading && user" width="100%">
    <v-list-item title="First Name">
      <template v-slot:append>
        <span class="text-subtitle1"
          ><b>{{ user?.firstname }}</b></span
        >
      </template>
    </v-list-item>
    <v-divider />
    <v-list-item title="Last Name">
      <template v-slot:append>
        <span class="text-subtitle1"
          ><b>{{ user?.lastname }}</b></span
        >
      </template>
    </v-list-item>
    <v-divider />
    <v-list-item title="Email Address">
      <template v-slot:append>
        <span class="text-subtitle1"
          ><b>{{ user?.username }}</b></span
        >
      </template>
    </v-list-item>
  </v-list>
</template>
