import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import startupReducer from "./startupSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    startup: startupReducer,
  },
});
