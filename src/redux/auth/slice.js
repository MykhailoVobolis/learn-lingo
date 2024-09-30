import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state) => {
  state.loading = false;
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
      .addCase(logIn.rejected, handleRejected);
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
