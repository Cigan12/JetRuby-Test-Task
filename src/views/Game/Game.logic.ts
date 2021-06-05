import { useDispatch, useSelector } from "react-redux";
import { changeCardStateAction } from "../../reducers/Game/Game.reducer";
import { ECardState } from "../../reducers/Game/Game.reducer.types";
import { TStore } from "../../store";

export const LGame = () => {
  const state = useSelector((state: TStore) => state);
  const dispatch = useDispatch();
  const handleCardClick = (id: number) => {
    dispatch(
      changeCardStateAction({
        id,
        state: ECardState.ACTIVE
      })
    );
  };

  return {
    handleCardClick,
    gameReducer: state.GameReducer
  };
};
