import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {RecipeService} from '../../services/recipe/recipe.service';
import {first} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Step} from '../../model/step';
import {Ingredient, Unit} from '../../model/ingredient';
import {Category} from '../../model/category';

@Component({
  selector: 'app-recipe-adding',
  templateUrl: './recipe-adding.component.html',
  styleUrls: ['./recipe-adding.component.css']
})
export class RecipeAddingComponent implements OnInit {

  // @ts-ignore
  formIngredient: FormGroup;
// @ts-ignore
  formRecipe: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  ingredients: Ingredient[];

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
  }


  /*  id: number;
    title: string;
    cookingTime: number;
    steps: Step[];
    ingredients: Ingredient[];
    createdAt: Date;
    imgId?: string;
    description?: string;
    category: Category;
    tags: string[];*/

  ngOnInit(): void {
    // Не нравится это дело, но без такой инициализации не работает
    this.ingredients = new Array(0);

    this.formRecipe = this.formBuilder.group({
      title: ['', Validators.required],
      cookingTime: ['', Validators.required]
    });

    this.formIngredient = this.formBuilder.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }

  get f(): { [p: string]: AbstractControl } {
    return this.formRecipe.controls;
  }

  addIngredient(name: string, count: number, strUnit: string): void {
// TODO Выбор unit из списка
    const unit = Unit.GRAM;
    const id =  this.ingredients.length + 1;
    this.ingredients.push({id,  name, count, unit} as Ingredient);
    console.log(this.ingredients.length);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formRecipe.invalid) {
      return;
    }

    this.loading = true;
    this.recipeService.addNewRecipe(this.formRecipe.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['../recipes'], {relativeTo: this.route});
        },
        error => {
          this.loading = false;
        });
  }
}
