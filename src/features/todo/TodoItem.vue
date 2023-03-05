<script setup lang="ts">
import { removeTodo, updateTodo } from './todoService';
import useTodoStore from './todoStore';
import { Todo } from './todoTypes';

defineProps<{ labelId: string; index: number; todo: Todo }>();
const todoStore = useTodoStore();

const toggleTodoItem = (index: number) => {
  const { id, completed } = todoStore.todos[index];
  todoStore.toggleTodo(index);
  if (id) updateTodo(id, !Boolean(completed));
};

const removeTodoItem = (index: number) => {
  const { id } = todoStore.todos[index];
  todoStore.removeTodo(index);
  if (id) removeTodo(id);
};
</script>

<template>
  <input
    type="checkbox"
    :id="labelId"
    :name="labelId"
    :checked="Boolean(todo.completed)"
    @change="() => toggleTodoItem(index)"
  />
  <label :for="labelId">{{ todo.description }}</label>
  <button @click="() => removeTodoItem(index)">x</button>
</template>
