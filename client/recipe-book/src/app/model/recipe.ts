import {Step} from './step';
import {Ingredient} from './ingredient';

export interface Recipe {
    id: number;
    title: string;
    cookingTime: number;
    steps: Step[];
    ingredients: Ingredient[];
    imgId?: string;
    description?: string;
}
