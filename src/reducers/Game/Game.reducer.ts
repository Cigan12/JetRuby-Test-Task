import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RandomSortedGameCards } from "../../utils/GetRandomCardsArray.util";
import { IGameState, ECardState, ICard } from "./Game.reducer.types";

const initialState: IGameState = {
  cards: RandomSortedGameCards(),
  currentAttempt: null,
  finish: false,
  readyForClick: true,
  attemptsCount: 0
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
    },
    setCurrentAttemptAction(state, action: PayloadAction<ICard | null>) {
      state.currentAttempt = action.payload;
      state.attemptsCount = state.attemptsCount + 1;
    },
    setReadyForClickAction(state, action: PayloadAction<boolean>) {
      state.readyForClick = action.payload;
    },
    setAttemptDoneAction(state, action: PayloadAction<number>) {
      const filteredArrayByDone = state.cards.filter(
        (card) => card.state === ECardState.DONE
      );
      if (filteredArrayByDone.length === state.cards.length - 2) {
        state.finish = true;
      }
      const firstIndex = state.cards.findIndex(
        (card) => card.id === state.currentAttempt?.id
      );
      const secondIndex = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      state.cards[firstIndex].state = ECardState.DONE;
      state.cards[secondIndex].state = ECardState.DONE;
      state.currentAttempt = null;
      state.readyForClick = true;
    },
    resetAttemptAction(state, action: PayloadAction<number>) {
      const firstIndex = state.cards.findIndex(
        (card) => card.id === state.currentAttempt?.id
      );
      const secondIndex = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      if (firstIndex !== -1 && secondIndex !== -1) {
        state.cards[firstIndex].state = ECardState.INACTIVE;
        state.cards[secondIndex].state = ECardState.INACTIVE;
      }

      state.currentAttempt = null;
      state.readyForClick = true;
    },
    resetGameStateAction(state) {
      state.cards = RandomSortedGameCards();
      state.attemptsCount = 0;
      state.finish = false;
    }
  }
});

export const GameReducer = GameSlice.reducer;
export const {
  changeCardStateAction,
  setCurrentAttemptAction,
  setAttemptDoneAction,
  resetAttemptAction,
  setReadyForClickAction,
  resetGameStateAction
} = GameSlice.actions;
