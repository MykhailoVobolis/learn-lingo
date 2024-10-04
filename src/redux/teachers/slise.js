import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTeachers } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    showDetails: {},
    // currentTeacher: null,
    isFavorite: false,
    loading: false,
    error: null,
  },
  reducers: {
    onShowDetails: (state, action) => {
      const teacherId = action.payload;
      state.showDetails[teacherId] = true;
    },
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

export const { onShowDetails } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
