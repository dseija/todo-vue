<script setup lang="ts">
import useTodoStore from './todoStore';

const todoStore = useTodoStore();
let description = '';
</script>

<template>
  <input type="text" v-model="description" />
  <button @click="() => todoStore.addTodo(description)">+</button>
</template>
