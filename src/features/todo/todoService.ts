import { mande } from 'mande';
import { API_BASE_URL } from '../../common/constants';
import { getUserSessionToken } from '../user';
import { Todo } from './todoTypes';

type TodoResponse = [any, Todo?];
type TodosResponse = [any, Todo[]?];

const todosApi = mande(`${API_BASE_URL}/todos`);

export const configureTodosApi = () => {
  todosApi.options.headers.Authorization = `Bearer ${getUserSessionToken()}`;
};

export const getTodos = async (): Promise<TodosResponse> => {
  try {
    const todos = await todosApi.get();
    return [null, todos as Todo[]];
  } catch (err) {
    return [err];
  }
};

export const createTodo = async (
  description: string
): Promise<TodoResponse> => {
  try {
    const todo = await todosApi.post({ description });
    return [null, todo as Todo];
  } catch (err) {
    return [err];
  }
};

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<TodoResponse> => {
  try {
    const todo = await todosApi.put(id, { completed });
    return [null, todo as Todo];
  } catch (err) {
    return [err];
  }
};

export const removeTodo = async (id: string): Promise<TodoResponse> => {
  try {
    const response = await todosApi.delete(id);
    return [null];
  } catch (err) {
    return [err];
  }
};
