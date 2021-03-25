import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe/recipe.service';
import {Recipe} from '../../model/recipe';
import {Category} from '../../model/category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category/category.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  categories: Category[] = [];
  category?: Category;
  constructor(private recipeService: RecipeService,
              private categoryService: CategoryService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.route.paramMap.subscribe(params => {
      const category1 = params.get('category');
      if (category1) {
        this.category = this.categories.find(value => category1 === value.id);
      }
      this.recipeService.getRecipes(this.category).subscribe(recipes => this.recipes = recipes);
    });
  }
}
