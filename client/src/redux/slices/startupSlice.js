import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/startups";

export const fetchStartups = createAsyncThunk(
  "startup/fetchAll",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

export const addStartup = createAsyncThunk(
  "startup/add",
  async (data) => {
    const res = await axios.post(API, data);
    return res.data;
  }
);

export const fetchStartupById = createAsyncThunk(
  "startup/fetchOne",
  async (id) => {
    const res = await axios.get(`${API}/${id}`);
    return res.data;
  }
);

const startupSlice = createSlice({
  name: "startup",

  initialState: {
    list: [],
    current: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchStartups.fulfilled, (state, action) => {
      state.list = action.payload.data;
    });

    builder.addCase(addStartup.fulfilled, (state, action) => {
      state.list.push(action.payload.data);
    });

    builder.addCase(fetchStartupById.fulfilled, (state, action) => {
      state.current = action.payload.data;
    });
  },
});

export default startupSlice.reducer;
