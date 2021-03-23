import {Injectable} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {Observable, of} from 'rxjs';
import {RECIPES} from '../../mock/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor() {
  }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }


}
