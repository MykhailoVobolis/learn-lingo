import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modal/slice.js";
import { authReducer } from "./auth/slice.js";
import { teachersReducer } from "./teachers/slise.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    teachers: teachersReducer,
  },
});

export default store;
