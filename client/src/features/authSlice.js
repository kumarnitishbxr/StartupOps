import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/authapi";

/* -------- Async Thunks -------- */

// Register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/register", userData);
      localStorage.setItem("token", data.token);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration failed");
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData)
      const { data } = await api.post("/api/auth/login", userData);
      localStorage.setItem("token", data.token);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

// Optional: fetch current user
export const fetchMe = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/api/auth/check");
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch user");
    }
  }
);

/* -------- Slice -------- */

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.authenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // registerUser
      .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // loginUser
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchMe
      .addCase(fetchMe.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.authenticated = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
