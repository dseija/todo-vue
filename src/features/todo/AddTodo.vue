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
  <v-form class="w-100" @submit.prevent="createTodoItem">
    <v-text-field
      autofocus
      variant="solo"
      placeholder="Add something to do here"
      color="primary"
      single-line
      hide-details
      v-model="description"
    >
      <template v-slot:append-inner class="pt-0">
        <v-icon
          v-if="description"
          icon="mdi-plus-circle"
          size="36"
          color="primary"
          class="mt-n2"
          style="opacity: 1"
          @click="createTodoItem"
        />
      </template>
    </v-text-field>
  </v-form>
</template>
