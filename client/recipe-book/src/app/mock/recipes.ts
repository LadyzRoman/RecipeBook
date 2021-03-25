import {Recipe} from '../model/recipe';
import {Category} from '../model/category';


export const CATEGORIES: Category[] = [
  {id: 'dinner', title: 'На ужин'},
  {id: 'breakfast', title: 'На завтрак'},
  {id: 'main', title: 'Основные блюда'},
  {id: 'beverages', title: 'Напитки'},
];
export const RECIPES: Recipe[] = [
  {
    id: 1, title: 'Котлетка с пюрешкой', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[3],
    tags: [],
    imgId: '9e922844-3ebf-455f-9fad-6e1a7a8b53fd',
  },
  {
    id: 2, title: 'Жареная курица', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[2],
    tags: [],
    imgId: '59f46033-19c2-4e0b-88fc-0d46d9efb0d3',
  },
  {
    id: 3, title: 'Салат', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[1],
    tags: [],
  },
  {
    id: 4, title: 'Борщ', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[1],
    tags: [],
    imgId: '2df30a29-c87b-4b27-9a46-f7c6fad32117',
  },
  {
    id: 5, title: 'Солянка', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[3],
    tags: [],
    imgId: 'f17ef797-8ab1-479e-9b8b-2fbee87491df',
  },
  {
    id: 6, title: 'Плов', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[0],
    tags: [],
    imgId: '786ffed7-2150-4520-95f4-91da4c2453ab',
  },
  {
    id: 7, title: 'Шаверма', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[0],
    tags: [],
    imgId: '0db1261f-0834-4283-b574-213a2e075ca5',
  },
  {
    id: 8, title: 'Спагетти болольезе', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[2],
    tags: [],
  },
];
