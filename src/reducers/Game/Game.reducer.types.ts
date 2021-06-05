export enum ECardState {
  INACTIVE = "inactive",
  ACTIVE = "active",
  DONE = "done"
}

export interface ICard {
  id: number;
  activeColor: string;
  state: ECardState;
  bindingId: number;
}

export interface IGameState {
  cards: Array<ICard>;
}
