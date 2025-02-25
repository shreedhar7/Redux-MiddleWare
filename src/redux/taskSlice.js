import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './taskActions';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, toggleTaskStatus, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
