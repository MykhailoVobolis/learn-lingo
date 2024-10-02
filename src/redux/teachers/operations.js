import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeachers } from "../../services/firebaseService.js";

export const fetchAllTeachers = createAsyncThunk("teachers/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await fetchTeachers();

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
