export class Recipe {
  constructor(private _recipeId: number,
              private _recipeTitle: string) {
  }


  get recipeId(): number {
    return this._recipeId;
  }

  set recipeId(value: number) {
    this._recipeId = value;
  }

  get recipeTitle(): string {
    return this._recipeTitle;
  }

  set recipeTitle(value: string) {
    this._recipeTitle = value;
  }
}
