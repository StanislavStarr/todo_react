import axios, { AxiosResponse } from 'axios';
import Todo from '../interfaces/todoInterface';

const BASE_URL = 'http://localhost:3000/posts'

export const getEntries = async (): Promise<AxiosResponse<Todo[]>> => {
  return await axios.get(BASE_URL);
};

export const createEntry = async (data: Partial<Todo>): Promise<Todo> => {
    return await axios.post(BASE_URL, data);
};

export const updateEntry = async (id: number, data: Partial<Todo>): Promise<Todo> => {
    return await axios.patch(`${BASE_URL}/${id}`, data);
};

export const deleteEntry = async (id: number): Promise<void> => {
  return await axios.delete(`${BASE_URL}/${id}`);

};

