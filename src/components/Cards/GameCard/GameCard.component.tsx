import * as React from "react";
import { ECardState } from "../../../reducers/Game/Game.reducer.types";
import { StyledGameCard } from "./GameCard.styles";

interface IGameCardProps {
  activeColor: string;
  state: ECardState;
  onClick: () => void;
}

export const GameCardComponent = React.memo<IGameCardProps>(
  ({ activeColor, onClick, state }) => {
    return (
      <StyledGameCard
        color={state === ECardState.ACTIVE ? activeColor : "teal"}
        theme={{
          hidden: state === ECardState.DONE,
          active: state === ECardState.ACTIVE
        }}
        onClick={onClick}
      ></StyledGameCard>
    );
  }
);
