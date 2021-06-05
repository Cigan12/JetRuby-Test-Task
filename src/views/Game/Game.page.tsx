import * as React from "react";
import { GameContainer } from "./Game.styles";
import { GameCardComponent } from "../../components/Cards/GameCard/GameCard.component";
import { useSelector } from "react-redux";
import { TStore } from "../../store";

export const GamePage: React.FC = () => {
  const state = useSelector((state: TStore) => state.GameReducer);
  return (
    <GameContainer>
      {state.cards.map((card) => (
        <GameCardComponent key={card.id} activeColor={card.activeColor} />
      ))}
    </GameContainer>
  );
};
