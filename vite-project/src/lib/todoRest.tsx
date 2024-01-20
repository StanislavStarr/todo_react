import axios from 'axios';
import Todo from '../interfaces/todoInterface';

const BASE_SERVER_URL = 'http://localhost:3000/posts'

export const getData = async (): Promise<Todo[]> => {
  return await axios.get(BASE_SERVER_URL);
};

export const createTodo = async (todoData: Todo): Promise<Todo> => {
    return await axios.post(BASE_SERVER_URL, {posts: [todoData]});
};

export const updateTodo = async (id: number, todoData: Partial<Todo>): Promise<Todo> => {
    return await axios.put(`${BASE_SERVER_URL}/${id}`, todoData);
};

export const deleteTodo = async (id: number): Promise<void> => {
  return await axios.delete(`${BASE_SERVER_URL}/${id}`);

};

