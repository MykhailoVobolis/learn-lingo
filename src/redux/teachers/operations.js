import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeachers } from "../../services/firebaseService.js";

export const fetchAllTeachers = createAsyncThunk("teachers/fetchTeachers", async ({ pageSize, lastKey }, thunkAPI) => {
  try {
    const response = await fetchTeachers(pageSize, lastKey);

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
