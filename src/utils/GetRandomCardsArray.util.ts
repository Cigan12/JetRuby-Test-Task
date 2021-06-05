import { ECardState, ICard } from "../reducers/Game/Game.reducer.types";

const colorsArray = [
  "cyan",
  "purple",
  "black",
  "lime",
  "olive",
  "maroon",
  "yellow",
  "silver"
];

const cardsArray: Array<ICard> = Array.from({ length: 8 })
  .map((_, index) => [
    {
      activeColor: colorsArray[index],
      bindingId: index,
      state: ECardState.INACTIVE
    },
    {
      activeColor: colorsArray[index],
      bindingId: index,
      state: ECardState.INACTIVE
    }
  ])
  .flat()
  .map((card, index) => ({
    id: index,
    ...card
  }));

export const RandomSortedGameCards = () => {
  const sortedArray = cardsArray
    .slice()
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
  return sortedArray;
};
