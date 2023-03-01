<script setup lang="ts">
import { AddTodo, TodoList } from '../features/todo';
</script>

<template>
  <h2>{{ 'User' }}'s TODO list</h2>
  <AddTodo />
  <TodoList />
</template>
