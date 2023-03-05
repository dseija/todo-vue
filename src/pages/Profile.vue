<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Layout } from '../features/layout';
import { UserProfile } from '../features/user';

const router = useRouter();
</script>

<template>
  <Layout>
    <h2>My Profile</h2>
    <UserProfile />
  </Layout>
</template>
