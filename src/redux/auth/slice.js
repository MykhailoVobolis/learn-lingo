import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
  state.isAuthenticating = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.isAuthenticating = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      uid: null,
      email: null,
      name: null,
    },
    loading: false,
    isLoggedIn: false,
    error: null,
    isAuthenticating: false,
    authInitialized: false,
    uploadedImage: true,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = {
        uid: null,
        email: null,
        name: null,
      };
      state.isLoggedIn = false;
    },
    setAuthInitialized(state, action) {
      state.authInitialized = action.payload;
    },
    uploadImage(state) {
      state.uploadedImage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обробка операції регістрації користувача
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isAuthenticating = false;
      })
      .addCase(register.rejected, handleRejected)

      // Обробка операції логіну користувача
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      // Обробка операції виходу користувача
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = {
          uid: null,
          email: null,
          name: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const { setUser, clearUser, setAuthInitialized, uploadImage } = authSlice.actions;
export const authReducer = authSlice.reducer;
