import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ImageService} from '../../services/image/image.service';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private imageService: ImageService) {
    this.form = this.fb.group({
      img: [null]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    // @ts-ignore
    const image = this.form.get('img').value;
    this.imageService.uploadImage(image).subscribe(s => console.log(s));
  }

  upload(event: Event): void {
    const target1 = event.target as HTMLInputElement;
    if (target1 && target1.files) {
      const file = target1.files[0];
      this.form.patchValue({
        img: file
      });
    }
  }

}
