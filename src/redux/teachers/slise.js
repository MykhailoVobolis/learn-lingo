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
    lastKey: null,
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
        state.error = null;
        state.loading = false;

        // Фільтруємо нових викладачів, щоб уникнути дублювання за ID
        const newTeachers = action.payload.teachersArray.filter(
          (newTeacher) => !state.teachers.some((existingTeacher) => existingTeacher.id === newTeacher.id)
        );

        state.teachers = [...state.teachers, ...newTeachers];
        state.lastKey = action.payload.newLastKey;
      })
      .addCase(fetchAllTeachers.rejected, handleRejected);
  },
});

export const { onShowDetails } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
