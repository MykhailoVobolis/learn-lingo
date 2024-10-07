import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFavoritesId, fetchAllFavoritesTeacher, toggleFavoriteTeacher } from "./operations.js";

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

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    teachersIsFavorite: [],
    favoritesId: [],
    loading: false,
    error: null,
    lastKey: null,
    loadMore: false,
  },
  reducers: {
    clearFavoritesId(state) {
      state.favoritesId = [];
      state.teachersIsFavorite = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFavoritesTeacher.pending, handlePending)
      .addCase(fetchAllFavoritesTeacher.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        const newTeachers = filterNewTeachers(state.teachersIsFavorite, action.payload.teachersArray);
        state.teachersIsFavorite = [...state.teachersIsFavorite, ...newTeachers];
        state.lastKey = action.payload.lastKey;
        state.loadMore = action.payload.loadMore;
      })
      .addCase(fetchAllFavoritesTeacher.rejected, handleRejected)

      .addCase(toggleFavoriteTeacher.pending, handlePending)
      .addCase(toggleFavoriteTeacher.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.favoritesId = action.payload.favoritesIdArray;
        state.teachersIsFavorite = action.payload.favoritesDataArray;
        state.lastKey = null;
      })
      .addCase(toggleFavoriteTeacher.rejected, handleRejected)

      .addCase(fetchAllFavoritesId.pending, handlePending)
      .addCase(fetchAllFavoritesId.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.favoritesId = action.payload;
      })
      .addCase(fetchAllFavoritesId.rejected, handleRejected);
  },
});

export const { clearFavoritesId } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
