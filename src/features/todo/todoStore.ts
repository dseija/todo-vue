import { defineStore } from 'pinia';
import { Todo } from './todoTypes';

const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    setTodos(todos: Todo[]) {
      this.todos = [...todos];
    },
    addTodo(description: string) {
      this.todos.push({ description });
    },
    updateTodoId(index: number, id: string) {
      const todo = this.todos[index];
      if (todo) this.todos[index].id = id;
    },
    toggleTodo(index: number) {
      const todo = this.todos[index];
      if (todo) this.todos[index].completed = !todo.completed;
    },
    removeTodo(index: number) {
      const todo = this.todos[index];
      if (todo) this.todos.splice(index, 1);
    },
  },
});

export default useTodoStore;
