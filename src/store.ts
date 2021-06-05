import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {}
});

export type TStore = ReturnType<typeof Store.getState>;
