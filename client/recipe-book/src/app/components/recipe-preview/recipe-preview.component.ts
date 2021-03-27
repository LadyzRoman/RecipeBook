import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {ImageService} from '../../services/image/image.service';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnInit {
  @Input() recipe?: Recipe;
  imageToShow: any;
  imageLoaded = false;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    if (this.recipe?.imgId) {
      this.imageService.getImage(this.recipe?.imgId).subscribe(data => {
        this.createImage(data);
        this.imageLoaded = true;
      }, error => {
        console.log(error);
      });
    }
  }

  createImage(image: Blob): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
