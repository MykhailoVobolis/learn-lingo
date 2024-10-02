import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTeachers } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
  // state.isAuthenticating = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  // state.isAuthenticating = false;
};

const teachersSlise = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    // currentTeacher: null,
    isFavorite: false,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeachers.pending, handlePending)
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.teachers = action.payload;
      })
      .addCase(fetchAllTeachers.rejected, handleRejected);
  },
});

export const teachersReducer = teachersSlise.reducer;
