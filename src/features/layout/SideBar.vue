<script setup lang="ts">
import router from '../../app/router';
import { clearSettings } from '../settings';
import { clearUserCookies } from '../user';
import { layoutState } from './layoutState';

const logout = () => {
  clearUserCookies();
  clearSettings();
  router.replace({ path: '/signin' });
};
</script>

<template>
  <v-navigation-drawer v-model="layoutState.sidebarOpen" width="240">
    <v-list nav>
      <v-list-item prepend-icon="mdi-home" value="home" title="Home" to="/" />
      <v-list-item
        prepend-icon="mdi-account"
        value="profile"
        title="My Profile"
        to="/profile"
      />
      <v-list-item
        prepend-icon="mdi-cog"
        value="settings"
        title="Settings"
        to="/settings"
      />
      <v-list-item
        prepend-icon="mdi-logout"
        value="logout"
        title="Logout"
        @click="logout"
      />
    </v-list>
  </v-navigation-drawer>
</template>
