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
  <v-list-item
    class="px-0"
    :value="labelId"
    @click="() => toggleTodoItem(index)"
  >
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-checkbox-btn
          color="primary"
          :model-value="Boolean(todo.completed)"
        ></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <v-list-item-title>{{ todo.description }}</v-list-item-title>
    <template v-slot:append>
      <v-btn
        color="grey-lighten-1"
        icon="mdi-close"
        variant="text"
        @click="() => removeTodoItem(index)"
      />
    </template>
  </v-list-item>
</template>
