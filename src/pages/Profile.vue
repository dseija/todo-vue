<script setup lang="ts">
import { useRouter } from 'vue-router';
import UserProfile from '../features/user/UserProfile.vue';

const router = useRouter();
</script>

<template>
  <h2>My Profile</h2>
  <UserProfile />
</template>
