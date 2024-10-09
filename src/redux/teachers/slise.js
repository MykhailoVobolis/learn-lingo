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

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    showDetails: {},
    curentTeacher: {},
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
    setCurentTeacher: (state, action) => {
      state.curentTeacher = action.payload;
    },
    clearCurentTeacher: (state) => {
      state.curentTeacher = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeachers.pending, handlePending)
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        // Додаємо тільки елементи, яких ще немає в state.teachers
        state.teachers.push(
          ...action.payload.teachersArray.filter(
            (newTeacher) => !state.teachers.some((existingTeacher) => existingTeacher.id === newTeacher.id)
          )
        );
        state.lastKey = action.payload.lastKey;
        state.loadMore = action.payload.loadMore;
      })
      .addCase(fetchAllTeachers.rejected, handleRejected);
  },
});

export const { onShowDetails, clearAllShowDetails, setCurentTeacher, clearCurentTeacher } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
