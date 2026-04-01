import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {})
      .addCase(fetchTasks.fulfilled, (state, action) => {})
      .addCase(fetchTasks.rejected, (state, action) => {});
  },
});

export default tasksSlice.reducer;
