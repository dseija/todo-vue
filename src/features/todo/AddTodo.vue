<script setup lang="ts">
import { ref } from 'vue';
import { createTodo } from './todoService';
import useTodoStore from './todoStore';

const todoStore = useTodoStore();
const description = ref('');

const createTodoItem = () => {
  if (description.value) {
    const nextIndex = todoStore.todos.length;
    todoStore.addTodo(description.value);
    createTodo(description.value).then(([err, todo]) => {
      if (!err && todo?.id) todoStore.updateTodoId(nextIndex, todo.id);
    });
    description.value = '';
  }
};
</script>

<template>
  <input type="text" v-model="description" />
  <button @click="createTodoItem">+</button>
</template>
