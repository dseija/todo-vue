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
  <p v-if="loading">Loading data...</p>
  <ul v-if="!loading && user">
    <li>First Name: {{ user?.firstname }}</li>
    <li>Last Name: {{ user?.lastname }}</li>
    <li>Email Address: {{ user?.username }}</li>
  </ul>
</template>
