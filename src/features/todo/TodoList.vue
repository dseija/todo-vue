<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { clearUserCookies } from '../user';
import TodoItem from './TodoItem.vue';
import { configureTodosApi, getTodos } from './todoService';
import useTodoStore from './todoStore';

configureTodosApi();
const router = useRouter();
const todoStore = useTodoStore();

const getTodoList = async () => {
  const [err, todos] = await getTodos();
  if (err && err.response?.status === 401) {
    clearUserCookies();
    router.replace('/signin');
  }

  if (todos) todoStore.setTodos(todos);
};

onMounted(() => {
  getTodoList();
});
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
