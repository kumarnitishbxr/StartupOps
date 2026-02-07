import { configureStore } from "@reduxjs/toolkit";

import startupReducer from "./slices/startupSlice";
import taskReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    startup: startupReducer,
    task: taskReducer,
    auth: authReducer,
  },
});
