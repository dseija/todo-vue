<script setup lang="ts">
import router from '../../app/router';
import { clearUserCookies } from '../user';

const logout = () => {
  clearUserCookies();
  router.replace({ path: '/signin' });
};
</script>

<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/profile">My Profile</router-link></li>
    <li><router-link to="/settings">Settings</router-link></li>
    <li><button @click="logout">Logout</button></li>
  </ul>
</template>
