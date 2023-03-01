<script setup lang="ts">
import useTodoStore from './todoStore';
import { Todo } from './todoTypes';

defineProps<{ labelId: string; index: number; todo: Todo }>();
const todoStore = useTodoStore();
</script>

<template>
  <input
    type="checkbox"
    :id="labelId"
    :name="labelId"
    :checked="Boolean(todo.completed)"
    @change="() => todoStore.toggleTodo(index)"
  />
  <label :for="labelId">{{ todo.description }}</label>
  <button @click="() => todoStore.removeTodo(index)">x</button>
</template>
