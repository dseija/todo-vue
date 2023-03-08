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
  <v-progress-circular
    v-if="loading"
    class="mt-4 mb-8"
    color="primary"
    indeterminate
    size="64"
  />
  <p v-if="!loading && !todoStore.todos.length" class="text-body2">
    There's nothing to do yet.
  </p>
  <v-list
    v-if="!loading && todoStore.todos.length"
    width="100%"
    select-strategy="classic"
  >
    <TodoItem
      v-for="(todo, index) in todoStore.todos"
      :label-id="`todo-item-${todo.id || index}`"
      :todo="todo"
      :index="index"
    />
  </v-list>
</template>
