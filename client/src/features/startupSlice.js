import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStartupById } from "../API/startupapi";

export const fetchStartup = createAsyncThunk(
  "startup/fetchStartup",
  async (startupId, { rejectWithValue }) => {
    try {
      return await getStartupById(startupId);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

const startupSlice = createSlice({
  name: "startup",
  initialState: {
    current: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearStartup(state) {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      .addCase(fetchStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearStartup } = startupSlice.actions;
export default startupSlice.reducer;
