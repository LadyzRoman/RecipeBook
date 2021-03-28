import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from '../../model/category';
import {CATEGORIES} from '../../mock/recipes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
