import {Injectable} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      {id: 1, title: 'Котлетка с пюрешкой', cookingTime: 60, steps: [], ingredients: []},
      {id: 2, title: 'Жареная курица', cookingTime: 60, steps: [], ingredients: [], imgUrl: 'file://D:\\Projects\\RecipeBook\\images\\72b4def6518b066e97b7d67a0a99c5fc.jpg'},
      {id: 3, title: 'Салат', cookingTime: 60, steps: [], ingredients: []},
      {id: 4, title: 'Борщ', cookingTime: 60, steps: [], ingredients: []},
      {id: 5, title: 'Солянка', cookingTime: 60, steps: [], ingredients: []},
      {id: 6, title: 'Плов', cookingTime: 60, steps: [], ingredients: []},
      {id: 7, title: 'Шаверма', cookingTime: 60, steps: [], ingredients: []},
      {id: 8, title: 'Спагетти болольезе', cookingTime: 60, steps: [], ingredients: []},
    ];
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }


}
