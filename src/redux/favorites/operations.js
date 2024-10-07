import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFavorites, fetchFavoritesId, toggleFavorite } from "../../services/firebaseService.js";

export const toggleFavoriteTeacher = createAsyncThunk("teachers/togleFavoriteTeacher", async (teacher, thunkAPI) => {
  try {
    const { favoritesIdArray, favoritesDataArray } = await toggleFavorite(teacher);

    return { favoritesIdArray, favoritesDataArray };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAllFavoritesId = createAsyncThunk("teachers/fetchFavoritesTescherId", async (_, thunkAPI) => {
  try {
    const response = await fetchFavoritesId();

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAllFavoritesTeacher = createAsyncThunk(
  "teachers/fetchFavoritesTescher",
  async ({ pageSize, lastKey }, thunkAPI) => {
    try {
      const response = await fetchFavorites(pageSize, lastKey);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
