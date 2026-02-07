// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getStartupAnalytics } from "../API/analyticsapi";

// export const fetchAnalytics = createAsyncThunk(
//   "analytics/fetchAnalytics",
//   async (startupId, { rejectWithValue }) => {
//     try {
//       return await getStartupAnalytics(startupId);
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message);
//     }
//   }
// );

// const analyticsSlice = createSlice({
//   name: "analytics",
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearAnalytics(state) {
//       state.data = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAnalytics.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAnalytics.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchAnalytics.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearAnalytics } = analyticsSlice.actions;
// export default analyticsSlice.reducer;
