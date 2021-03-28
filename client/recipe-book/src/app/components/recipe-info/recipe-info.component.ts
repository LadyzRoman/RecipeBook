import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ImageService} from '../../services/image/image.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipe?: Recipe;
  titleImageToShow: any;
  imageLoaded = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private imageService: ImageService) { }

  ngOnInit(): void {
    this.initRecipe();
    if (this.recipe?.imgId) {
      this.imageService.getImage(this.recipe?.imgId).subscribe(data => {
        this.createTitleImage(data);
        this.imageLoaded = true;
      }, error => {
        console.log(error);
      });
    }
  }

  createTitleImage(image: Blob): void {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.titleImageToShow = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
  }

  private initRecipe(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }
}
