import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modal/slice.js";
import { authReducer } from "./auth/slice.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});

export default store;
