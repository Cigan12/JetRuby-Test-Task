import * as React from "react";
import { GameContainer } from "./Game.styles";
import { GameCardComponent } from "../../components/Cards/GameCard/GameCard.component";
import { LGame } from "./Game.logic";

export const GamePage: React.FC = () => {
  const { handleCardClick, gameReducer } = LGame();
  return (
    <GameContainer>
      {gameReducer.cards.map((card) => (
        <GameCardComponent
          key={card.id}
          activeColor={card.activeColor}
          state={card.state}
          onClick={handleCardClick.bind(undefined, card)}
        />
      ))}
    </GameContainer>
  );
};
