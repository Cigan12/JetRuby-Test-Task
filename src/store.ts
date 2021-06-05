import { configureStore } from "@reduxjs/toolkit";
import { GameReducer } from "./reducers/Game/Game.reducer";

export const Store = configureStore({
  reducer: {
    GameReducer
  }
});

export type TStore = ReturnType<typeof Store.getState>;
