import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipe?: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.initRecipe();
  }

  private initRecipe(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }
}
