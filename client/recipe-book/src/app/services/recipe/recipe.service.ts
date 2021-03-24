import {Injectable} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {Observable, of} from 'rxjs';
import {RECIPES} from '../../mock/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() {
  }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }


  getRecipe(id: number): Observable<Recipe>{
    const recipe = RECIPES.find(value => value.id === id);
    if (recipe) {
      return of(recipe);
    }
    throw new Error(`no hero was found with index ${id}`);
  }
}
