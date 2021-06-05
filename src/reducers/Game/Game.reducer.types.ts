export enum ECardState {
  INACTIVE = "inactive",
  ACTIVE = "active"
}

export interface ICard {
  id: number;
  activeColor: string;
  state: ECardState;
  bindId: number;
}

export interface IGameState {
  cards: Array<ICard>;
}
