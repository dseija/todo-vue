<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import useTodoStore from './todoStore';

const todoStore = useTodoStore();
</script>

<template>
  <ul>
    <li v-for="(todo, index) in todoStore.todos">
      <TodoItem
        :label-id="`todo-item-${todo.id || index}`"
        :todo="todo"
        :index="index"
      />
    </li>
  </ul>
</template>
