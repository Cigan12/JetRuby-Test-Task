import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCardStateAction,
  resetAttemptAction,
  resetGameStateAction,
  setAttemptDoneAction,
  setCurrentAttemptAction,
  setReadyForClickAction
} from "../../reducers/Game/Game.reducer";
import { ECardState, ICard } from "../../reducers/Game/Game.reducer.types";
import { TStore } from "../../store";

export const LGame = () => {
  const state = useSelector((state: TStore) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.GameReducer.finish) {
      alert(
        `Congratulations, you spent ${state.GameReducer.attemptsCount} attempts to win`
      );
      dispatch(resetGameStateAction());
    }
  }, [state.GameReducer.finish, state.GameReducer.attemptsCount, dispatch]);

  const handleCardClick = useCallback(
    (card: ICard) => {
      if (
        card.state === ECardState.INACTIVE &&
        state.GameReducer.readyForClick
      ) {
        dispatch(
          changeCardStateAction({
            id: card.id,
            state: ECardState.ACTIVE
          })
        );
        if (state.GameReducer.currentAttempt) {
          dispatch(setReadyForClickAction(false));
          if (state.GameReducer.currentAttempt.bindingId === card.bindingId) {
            setTimeout(() => {
              dispatch(setAttemptDoneAction(card.id));
            }, 1000);
          } else {
            setTimeout(() => {
              dispatch(resetAttemptAction(card.id));
            }, 1000);
          }
        } else {
          dispatch(setCurrentAttemptAction(card));
        }
      }
    },
    [
      dispatch,
      state.GameReducer.currentAttempt,
      state.GameReducer.readyForClick
    ]
  );

  return {
    handleCardClick,
    gameReducer: state.GameReducer
  };
};
