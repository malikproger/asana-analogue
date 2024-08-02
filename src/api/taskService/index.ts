import { Task } from '../../types';
import { api } from '../api';

export const taskService = api.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => ({
        url: '/getTasks',
        method: 'GET',
      }),
    }),
    createTask: build.mutation<Task, { name: string; description: string }>({
      query: (task) => ({
        url: '/createTask',
        method: 'POST',
        body: task,
      }),
    }),
    deleteTask: build.mutation<void, { id: string }>({
      query: (id) => ({
        url: '/deleteTask',
        method: 'DELETE',
        body: { id },
      }),
    }),
    updateTask: build.mutation<void, { name: string; description: string }>({
      query: (task) => ({
        url: '/updateTask',
        method: 'PUT',
        body: task,
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} = taskService;

export const {
  endpoints: { createTask, deleteTask, getTasks, updateTask },
} = taskService;
