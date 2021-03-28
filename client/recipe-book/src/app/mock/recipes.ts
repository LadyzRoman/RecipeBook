import {Recipe} from '../model/recipe';
import {Unit} from '../model/ingredient';
import {Category} from '../model/category';


export const CATEGORIES: Category[] = [
  {id: 'dinner', title: 'На ужин'},
  {id: 'breakfast', title: 'На завтрак'},
  {id: 'main', title: 'Основные блюда'},
  {id: 'beverages', title: 'Напитки'},
];
export const RECIPES: Recipe[] = [
  {
    id: 1, title: 'Котлетка с пюрешкой', cookingTime: 60,
    steps:  [
      {id: 1, imgId: 'fecf89ae-654e-4c0d-87e1-7732231b2ac5', text: 'Картофель чистим, разрезаем на половинки и отвариваем в подсоленной воде.'},
      {id: 2, imgId: '1cf9a8eb-310e-4e41-b451-ed7d922a9c61', text: 'Нагреваем молоко, добавляем в него немного сливочного масла. ' +
          'Отваренный картофель измельчаем, соединяем с нагретым молоком и размешиваем.'},
      {id: 3, imgId: '14869ea5-f0e3-410a-9c62-0da01a96cfa8', text: 'Подаем котлеты с пюре и нарезанным соленым огурцом.'},
      {id: 4, imgId: '', text: 'Спасибо за внимание!'}
    ],
    ingredients: [
      {id: 1, name: 'Фарш', count: 800, unit: Unit.GRAM},
      {id: 2, name: 'Картофель', count: 5, unit: Unit.PIECE},
      {id: 3, name: 'Лук', count: 2, unit: Unit.PIECE} ],
    createdAt: new Date(),
    category: CATEGORIES[3],
    tags: [],
    imgId: 'a82fce71-15ec-4171-9289-db319ef64659',
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
    id: 4, title: 'Борщ', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(), tags: [],
    category: CATEGORIES[1],
    imgId: '328f71f7-6dc4-487c-9204-e39c1a38392a',
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
