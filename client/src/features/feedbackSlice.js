import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeedbacks } from "../API/feedbackapi";

export const fetchFeedback = createAsyncThunk(
  "feedback/fetchFeedback",
  async (startupId, { rejectWithValue }) => {
    try {
      return await getFeedbacks(startupId);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default feedbackSlice.reducer;
