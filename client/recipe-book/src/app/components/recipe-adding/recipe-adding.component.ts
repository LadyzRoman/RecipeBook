import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {RecipeService} from '../../services/recipe/recipe.service';
import {first} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Step} from '../../model/step';
import {Ingredient, Unit} from '../../model/ingredient';
import {Category} from '../../model/category';
import {of} from 'rxjs';
import {CategoryService} from '../../services/category/category.service';

@Component({
  selector: 'app-recipe-adding',
  templateUrl: './recipe-adding.component.html',
  styleUrls: ['./recipe-adding.component.css']
})
export class RecipeAddingComponent implements OnInit {

  // @ts-ignore
  formIngredient: FormGroup;
  // @ts-ignore
  formStep: FormGroup;
// @ts-ignore
  formRecipe: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  ingredients: Ingredient[];
  // @ts-ignore
  steps: Step[];
// @ts-ignore
  formUnits: FormGroup;
  units = [] as any;


  categories: Category[] = [];

  form = new FormGroup({
    category: new FormControl()
  });

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private categoryService: CategoryService
  ) {
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = [];
        this.categories.push({id: 'undefined', title: 'Любая категория'});
        this.categories = this.categories.concat(categories);
        this.form.patchValue({category: this.categories[0]});
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
    this.steps = new Array(0);

    this.formRecipe = this.formBuilder.group({
      title: ['', Validators.required],
      Img: ['', Validators.required],
      description: ['', Validators.required],
      cookingTime: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.formIngredient = this.formBuilder.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
      unit: ['', Validators.required]
    });

    this.formStep = this.formBuilder.group({
      description: ['', Validators.required],
      img: ['', Validators.required]
    });

    this.formUnits = this.formBuilder.group({
      units: ['']
    });
    of(this.getUntis()).subscribe(units => {
      this.units = units;
      this.formUnits.controls.units.patchValue(this.units[0].id);
    });
  }

  get f(): { [p: string]: AbstractControl } {
    return this.formRecipe.controls;
  }

  get f_ingredient(): { [p: string]: AbstractControl } {
    return this.formIngredient.controls;
  }

  addIngredient(name: string, count: number, strUnit: string): void {
    this.submitted = true;
    if (this.formIngredient.invalid) {
      return;
    }
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

  addStep(text: string, imgId: string): void {
    const id = this.ingredients.length + 1;
    this.steps.push({id, text, imgId} as Step);
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

  deleteIngredient(i: number): void {
    this.ingredients.splice(i, 1);
  }

  deleteStep(i: number): void {
    this.steps.splice(i, 1);
  }
}
