export interface Ingredient {
  id: number;
  name: string;
  count: number;
  unit: Unit;
}

export enum Unit {
  PIECE,
  GRAM,
  SPOON
}
