import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modal/slice.js";
import { authReducer } from "./auth/slice.js";
import { teachersReducer } from "./teachers/slise.js";
import { favoritesReducer } from "./favorites/slice.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    teachers: teachersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
