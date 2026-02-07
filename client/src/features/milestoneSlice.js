import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMilestones } from "../API/milstoneapi";

export const fetchMilestones = createAsyncThunk(
  "milestones/fetchMilestones",
  async (startupId, { rejectWithValue }) => {
    try {
      return await getMilestones(startupId);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

const milestoneSlice = createSlice({
  name: "milestones",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMilestones.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMilestones.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMilestones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default milestoneSlice.reducer;
