<script setup lang="ts">
import { Layout } from '../features/layout';
import { AddTodo, TodoList } from '../features/todo';
import { getUserSessionDisplayName } from '../features/user';

const userDisplayName = getUserSessionDisplayName();
</script>

<template>
  <Layout>
    <v-container class="d-flex justify-center">
      <v-responsive
        max-width="396"
        content-class="d-flex flex-column align-center"
      >
        <h2 class="text-h4 mt-4 mb-4">{{ userDisplayName }}'s TODO list</h2>
        <AddTodo />
        <TodoList />
      </v-responsive>
    </v-container>
  </Layout>
</template>
