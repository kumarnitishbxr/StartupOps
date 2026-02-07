import { combineReducers } from "@reduxjs/toolkit";

/* Feature reducers */
import authReducer from '../features/authSlice'
import startupReducer from "../features/startupSlice";
import taskReducer from "../features/taskSlice";
import milestoneReducer from "../features/milestoneSlice";
import feedbackReducer from "../features/feedbackSlice";
import analyticsReducer from "../features/analyticsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  startup: startupReducer,
  tasks: taskReducer,
  milestones: milestoneReducer,
  feedback: feedbackReducer,
  analytics: analyticsReducer,
});

export default rootReducer;
