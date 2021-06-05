import * as React from "react";
import { GameContainer } from "./Game.styles";
import { GameCardComponent } from "../../components/Cards/GameCard/GameCard.component";

export const GamePage: React.FC = () => {
  return (
    <GameContainer>
      <GameCardComponent />
    </GameContainer>
  );
};
