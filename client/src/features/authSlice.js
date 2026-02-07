import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/authapi";

/* -------- Async Thunks -------- */

// Register user
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await api.post("/api/auth/register", userData);
//       localStorage.setItem("token", data.token);
//       return data.user;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Registration failed");
//     }
//   }
// );

// // Login user
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       console.log(userData)
//       const { data } = await api.post("/api/auth/login", userData);
//       localStorage.setItem("token", data.token);
//       return data.user;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// // Optional: fetch current user
// export const fetchMe = createAsyncThunk(
//   "auth/check",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/api/auth/check");
//       return data.user;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Failed to fetch user");
//     }
//   }
// );

// /* -------- Slice -------- */

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.authenticated = false;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // registerUser
//       .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null; })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // loginUser
//       .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // fetchMe
//       .addCase(fetchMe.pending, (state) => { state.loading = true; state.error = null; })
//       .addCase(fetchMe.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMe.rejected, (state, action) => {
//         state.loading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;






export const registerUser = createAsyncThunk(

    'auth/register',
    async (userData, { rejectWithValue }) => {

        try{

            const response =  await api.post('/api/auth/register', userData);
            return response.data.user;

        } catch (error) {

            return rejectWithValue(error);

        }
    }
);



export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/auth/login', credentials);
            return response.data.user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



export const logoutUser = createAsyncThunk(
    'auth/logout',  //slice/route
    async (_, { rejectWithValue }) => {
        try {
            await api.post('/api/auth/logout');
            return null;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



export const checkAuth = createAsyncThunk(
    'auth/check',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get('/api/auth/check');
            return data.user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
    },

    reducers: {
    },

    extraReducers: (builder) => {

        builder
        
        // Register User Cases
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.response.data || 'Something went wrong';
            state.isAuthenticated = false;
            state.user = null;
        })
    
        // Login User Cases
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.response?.data || 'Something went wrong';
            state.isAuthenticated = false;
            state.user = null;
        })
    
        // Check Auth Cases
        .addCase(checkAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
        })
        .addCase(checkAuth.rejected, (state) => {
            state.loading = false;
            state.error = null;
            state.isAuthenticated = false;
            state.user = null;
        })
    
        // Logout User Cases
        .addCase(logoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.response?.message || 'Something went wrong';
            state.isAuthenticated = false;
            state.user = null;
        });
    }
});




export default authSlice.reducer;
