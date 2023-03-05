<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Layout } from '../features/layout';
import { AddTodo, TodoList } from '../features/todo';
import { getUserSessionDisplayName } from '../features/user';

const router = useRouter();

const userDisplayName = getUserSessionDisplayName();
</script>

<template>
  <Layout>
    <h2>{{ userDisplayName }}'s TODO list</h2>
    <AddTodo />
    <TodoList />
  </Layout>
</template>
