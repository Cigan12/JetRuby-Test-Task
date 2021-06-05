import * as React from "react";
import { StyledGameCard } from "./GameCard.styles";

interface IGameCardProps {
  activeColor: string;
}

export const GameCardComponent = React.memo<IGameCardProps>(
  ({ activeColor }) => {
    return <StyledGameCard color={activeColor}></StyledGameCard>;
  }
);
