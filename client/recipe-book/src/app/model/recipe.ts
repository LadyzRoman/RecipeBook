import {Step} from './step';
import {Ingredient} from './ingredient';
import {Category} from './category';

export interface Recipe {
  id: number;
  title: string;
  cookingTime: number;
  steps: Step[];
  ingredients: Ingredient[];
  createdAt: Date;
  imgId?: string;
  description?: string;
  category: Category;
  tags: string[];
}
