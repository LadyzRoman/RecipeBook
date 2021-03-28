import {Component, Input, OnInit} from '@angular/core';
import {Step} from '../../model/step';
import {ImageService} from '../../services/image/image.service';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {
  @Input() step?: Step;
  imageLoaded = false;
  imageToShow: any;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    if (this.step?.imgId)
    {
      this.imageService.getImage(this.step?.imgId).subscribe(data => {
        this.createImage(data);
        this.imageLoaded = true;
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
