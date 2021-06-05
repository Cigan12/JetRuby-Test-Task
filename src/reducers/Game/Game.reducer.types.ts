export enum ECardState {
  INACTIVE = "inactive",
  ACTIVE = "active"
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
