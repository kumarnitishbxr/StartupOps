// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

// const store = configureStore({
//   reducer: rootReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // APIs, dates, etc. ke liye
//     }),

//   // devTools: process.env.NODE_ENV !== "production",
// });


// export default store;



import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
