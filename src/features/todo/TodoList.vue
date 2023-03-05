<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { clearUserCookies } from '../user';
import TodoItem from './TodoItem.vue';
import { configureTodosApi, getTodos } from './todoService';
import useTodoStore from './todoStore';

configureTodosApi();
const router = useRouter();
const todoStore = useTodoStore();
const loading = ref(true);

const getTodoList = async () => {
  loading.value = true;
  const [err, todos] = await getTodos();
  if (err && err.response?.status === 401) {
    clearUserCookies();
    router.replace('/signin');
  }

  if (todos) todoStore.setTodos(todos);
  loading.value = false;
};

onMounted(() => {
  getTodoList();
});
</script>

<template>
  <p v-if="loading">Loading todos...</p>
  <p v-if="!loading && !todoStore.todos.length">There's nothing to do yet.</p>
  <ul v-if="!loading && todoStore.todos.length">
    <li v-for="(todo, index) in todoStore.todos">
      <TodoItem
        :label-id="`todo-item-${todo.id || index}`"
        :todo="todo"
        :index="index"
      />
    </li>
  </ul>
</template>
