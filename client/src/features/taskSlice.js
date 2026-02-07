import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../API/taskapi";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (startupId, { rejectWithValue }) => {
    try {
      return await getTasks(startupId);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;
