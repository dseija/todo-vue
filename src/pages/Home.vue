<script setup lang="ts">
import { useRouter } from 'vue-router';
import { AddTodo, TodoList } from '../features/todo';
import { clearUserCookies, getUserSessionDisplayName } from '../features/user';

const router = useRouter();

const userDisplayName = getUserSessionDisplayName();

const logout = () => {
  clearUserCookies();
  router.replace({ path: '/signin' });
};
</script>

<template>
  <button @click="logout">Logout!</button>
  <h2>{{ userDisplayName }}'s TODO list</h2>
  <AddTodo />
  <TodoList />
</template>
