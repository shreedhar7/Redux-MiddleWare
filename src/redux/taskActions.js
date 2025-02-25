import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
