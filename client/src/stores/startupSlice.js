import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base API URL for your backend
const API = "http://localhost:5000/api/startups";

/* =========================
   ASYNC THUNKS (API CALLS)
========================= */

// Fetch all startups of logged in user
export const fetchStartups = createAsyncThunk(
  "startup/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch startups"
      );
    }
  }
);

// Fetch single startup by ID
export const fetchStartupById = createAsyncThunk(
  "startup/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch startup"
      );
    }
  }
);

// Create a new startup
export const addStartup = createAsyncThunk(
  "startup/add",
  async (startupData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.post(API, startupData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create startup"
      );
    }
  }
);


// Update existing startup
export const updateStartup = createAsyncThunk(
  "startup/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update startup"
      );
    }
  }
);

// Delete startup
export const deleteStartup = createAsyncThunk(
  "startup/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete startup"
      );
    }
  }
);

/* =========================
   STARTUP SLICE
========================= */

const startupSlice = createSlice({
  name: "startup",

  initialState: {
    list: [],
    current: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearCurrentStartup: (state) => {
      state.current = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* ===== FETCH ALL STARTUPS ===== */
      .addCase(fetchStartups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
      })

      .addCase(fetchStartups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== FETCH SINGLE STARTUP ===== */
      .addCase(fetchStartupById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchStartupById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.data;
      })

      .addCase(fetchStartupById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== ADD NEW STARTUP ===== */
      .addCase(addStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addStartup.fulfilled, (state, action) => {
        state.loading = false;

        if (state.list) {
          state.list.push(action.payload.data);
        } else {
          state.list = [action.payload.data];
        }
      })

      .addCase(addStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== UPDATE STARTUP ===== */
      .addCase(updateStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateStartup.fulfilled, (state, action) => {
        state.loading = false;

        // Update in list
        state.list = state.list.map((startup) =>
          startup._id === action.payload.data._id
            ? action.payload.data
            : startup
        );

        // Update current if it is the same startup
        if (state.current?._id === action.payload.data._id) {
          state.current = action.payload.data;
        }
      })

      .addCase(updateStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== DELETE STARTUP ===== */
      .addCase(deleteStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteStartup.fulfilled, (state, action) => {
        state.loading = false;

        // Remove deleted startup from list
        state.list = state.list.filter(
          (startup) => startup._id !== action.payload
        );

        // Clear current if deleted one is open
        if (state.current?._id === action.payload) {
          state.current = null;
        }
      })

      .addCase(deleteStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentStartup } = startupSlice.actions;

export default startupSlice.reducer;
