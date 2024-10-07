import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTeachers } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
  state.loadMore = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

// Функція фільтрації нових викладачів, щоб уникнути дублювання за ID
const filterNewTeachers = (existingTeachers, newTeachersArray) => {
  return newTeachersArray.filter(
    (newTeacher) => !existingTeachers.some((existingTeacher) => existingTeacher.id === newTeacher.id)
  );
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    showDetails: {},
    isFavorite: false,
    loading: false,
    error: null,
    lastKey: null,
    loadMore: false,
  },
  reducers: {
    onShowDetails: (state, action) => {
      const teacherId = action.payload;
      state.showDetails[teacherId] = true;
    },
    clearAllShowDetails: (state) => {
      Object.keys(state.showDetails).forEach((teacherId) => {
        state.showDetails[teacherId] = false;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeachers.pending, handlePending)
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        const newTeachers = filterNewTeachers(state.teachers, action.payload.teachersArray);
        state.teachers = [...state.teachers, ...newTeachers];
        state.lastKey = action.payload.lastKey;
        state.loadMore = action.payload.loadMore;
      })
      .addCase(fetchAllTeachers.rejected, handleRejected);
  },
});

export const { onShowDetails, clearAllShowDetails } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
