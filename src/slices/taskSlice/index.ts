import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { taskService } from '../../api/taskService';
import { Task } from '../../types';

type InitialState = {
  tasks: Task[] | null;
  isTasksLoading: boolean;
};

const initialState: InitialState = {
  tasks: null,
  isTasksLoading: false,
};

const { createTask, deleteTask, getTasks, updateTask } = taskService.endpoints;

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addMatcher(
        isAnyOf(
          createTask.matchPending,
          deleteTask.matchPending,
          getTasks.matchPending,
          updateTask.matchPending,
        ),
        (state) => {
          state.isTasksLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          createTask.matchRejected,
          deleteTask.matchRejected,
          getTasks.matchRejected,
          updateTask.matchRejected,
        ),
        (state) => {
          state.isTasksLoading = false;
        },
      )
      .addMatcher(getTasks.matchFulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isTasksLoading = false;
      })
      .addMatcher(createTask.matchFulfilled, (state, action) => {
        state.tasks = [...(state.tasks ?? []), action.payload];
        state.isTasksLoading = false;
      })
      .addMatcher(getTasks.matchFulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isTasksLoading = false;
      })
      .addMatcher(getTasks.matchFulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isTasksLoading = false;
      });
  },
});

export default taskService.reducer;
