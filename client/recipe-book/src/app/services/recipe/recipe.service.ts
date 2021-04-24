import {Injectable} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {Observable, of} from 'rxjs';
import {RECIPES} from '../../mock/recipes';
import {Category} from '../../model/category';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRecipes(category?: Category): Observable<Recipe[]> {
    if (category) {
      const categoryRecipes = RECIPES.filter(value => category === value.category);
      return of(categoryRecipes);
    }
    return of(RECIPES);
  }


  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(value => value.id === id);
    if (recipe) {
      return of(recipe);
    }
    throw new Error(`no receipt was found with index ${id}`);
  }

  addNewRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/add-recipe`, recipe);
  }
}
