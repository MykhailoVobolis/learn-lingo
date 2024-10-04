import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeachers } from "../../services/firebaseService.js";

// export const fetchAllTeachers = createAsyncThunk("teachers/fetchAll", async (_, thunkAPI) => {
//   try {
//     const response = await fetchTeachers();

//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// Створюємо асинхронний екшен
export const fetchAllTeachers = createAsyncThunk("teachers/fetchTeachers", async ({ pageSize, lastKey }, thunkAPI) => {
  try {
    const { teachersArray, lastKey: newLastKey } = await fetchTeachers(pageSize, lastKey);

    return { teachersArray, newLastKey };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
