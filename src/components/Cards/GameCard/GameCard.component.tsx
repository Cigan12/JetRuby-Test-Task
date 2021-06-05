import * as React from "react";
import { StyledGameCard } from "./GameCard.styles";

export const GameCardComponent = React.memo(() => {
  return <StyledGameCard></StyledGameCard>;
});
