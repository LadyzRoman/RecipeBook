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
import {of} from 'rxjs';

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
// @ts-ignore
  formUnits: FormGroup;
  units = [] as any;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {

    this.formUnits = this.formBuilder.group({
      units: ['']
    });
    of(this.getUntis()).subscribe(units => {
      this.units = units;
      this.formUnits.controls.units.patchValue(this.units[0].id);
    });
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
    const unit = parseInt(strUnit, 10);
    const id = this.ingredients.length + 1;
    if (name.length > 1) {
      this.ingredients.push({id, name, count, unit} as Ingredient);
    } else {
      console.log('No name');
    }
  }

  // tslint:disable-next-line:typedef
  getUntis() {
    return [
      {id: '0', name: 'шт'},
      {id: '1', name: 'гр'},
      {id: '2', name: 'ложка'}
    ];
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
