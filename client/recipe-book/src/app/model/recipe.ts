import {Step} from './step';
import {Ingredient} from './ingredient';

export interface Recipe {
  id: number;
  title: string;
  cookingTime: number;
  steps: Step[];
  ingredients: Ingredient[];
  createdAt: Date;
  imgId?: string;
  description?: string;
  category: string;
  tags: string[];
}
