import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../services/category/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  categories: Category[] = [];

  form = new FormGroup({
    category: new FormControl()
  });

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = [];
      this.categories.push({id: 'undefined', title: 'Любая категория'});
      this.categories = this.categories.concat(categories);
      this.form.patchValue({category: this.categories[0]});
    });
  }

  find(): void {
    const category: Category = this.form.value.category;
    this.router.navigate(['/recipes', category.id]);
  }
}
