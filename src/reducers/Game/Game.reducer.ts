import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState, ECardState } from "./Game.reducer.types";

const initialState: IGameState = {
  cards: []
};

const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    changeCardStateAction(
      state,
      action: PayloadAction<{ id: number; state: ECardState }>
    ) {
      const indexOfCard = state.cards.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfCard !== -1) {
        state.cards[indexOfCard].state = action.payload.state;
      }
    }
  }
});

export const GameReducer = GameSlice.reducer;
export const { changeCardStateAction } = GameSlice.actions;
