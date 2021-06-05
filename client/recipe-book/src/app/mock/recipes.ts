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
    id: 1, title: 'Котлетка с пюрешкой', cookingTime: 50,
    steps:  [
      {id: 1, imgId: '0ed7ea88-32c2-4c12-bb62-298021ab2ab6', text: 'Картофель чистим, разрезаем на половинки и отвариваем в подсоленной воде.'},
      {id: 2, imgId: '5ead2eb9-bbfe-4933-bfdf-622ffa3d1899', text: 'С булки срезаем корки, выкладываем в миску, солим и заливаем небольшим количеством молока. Оставляем на время.'},
      {id: 3, imgId: '4753414f-602b-4fe2-9968-d3f78206d768', text: ' Лук, мясо, отжатую булку и 1 зубчик чеснока пропускаем через мясорубку.'},
      {id: 4, imgId: 'b2e905b2-45c5-41fa-b080-812ba5cb3350', text: 'Все перемешиваем, приправляем перцем и добавляем немного воды. Лепим котлеты и обваливаем их в панировочных сухарях.'},
      {id: 5, imgId: '044a45f9-9948-4cc0-919d-8e7242eba5d9', text: 'В сковороде разогреваем растительное масло и обжариваем котлеты с двух сторон до готовности.'},
      {id: 6, imgId: 'd8c0c163-2851-46c8-a0c3-a00e09320281', text: 'Нагреваем молоко, добавляем в него немного сливочного масла. Отваренный картофель измельчаем, соединяем с нагретым молоком и размешиваем.'},
      {id: 7, imgId: 'c922e3bf-d3d2-49f6-be9b-304f755e152b', text: 'Подаем котлеты с пюре и нарезанным соленым огурцом. Приятного аппетита!'}
    ],
    ingredients: [
      {id: 1, name: 'Говядина', count: 400, unit: Unit.GRAM},
      {id: 1, name: 'Свинина', count: 400, unit: Unit.GRAM},
      {id: 2, name: 'Картофель', count: 7, unit: Unit.PIECE},
      {id: 2, name: 'Хлеб белый', count: 2, unit: Unit.PIECE},
      {id: 2, name: 'Молоко', count: 200, unit: Unit.MLITER},
      {id: 2, name: 'Сухари из белого хлеба', count: 50, unit: Unit.GRAM},
      {id: 2, name: 'Огурцы солёные', count: 2, unit: Unit.PIECE},
      {id: 3, name: 'Лук', count: 2, unit: Unit.PIECE} ],
    createdAt: new Date(),
    category: CATEGORIES[3],
    tags: [],
    imgId: 'c922e3bf-d3d2-49f6-be9b-304f755e152b',
    description: 'Купленные в магазине котлеты достаточно вкусные. Однако иногда хочется порадовать свою семью домашними котлетками.\n' +
      '\n' +
      'С любовью, приготовленное картофельное пюре с котлетой, фото и рецепт описан ниже, из качественных продуктов, гораздо полезнее. Можно выбрать именно тот состав, который понравится и будет наиболее полезен. А в тандеме с домашними котлетами получается просто изумительное блюдо. Плюсом можно красиво накрыть на стол, достать лучшие приборы и посуду. Украсить готовое блюдо свежей зеленью.'
  },
  {
    id: 2, title: 'Жареная курица', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[2],
    tags: [],
    imgId: '566a41ad-b088-4fbf-a772-6012c77c27ab',
  },
  {
    id: 3, title: 'Салат', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[1],
    tags: [],
    imgId: 'd5b09a09-81a1-4aa4-a61c-59745f8eaa6b',
  },
  {
    id: 4, title: 'Борщ', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(), tags: [],
    category: CATEGORIES[1],
    imgId: 'dc3cf82a-8fdd-47c8-93fa-7ed37092b8d4',
  },
  {
    id: 5, title: 'Солянка', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[3],
    tags: [],
    imgId: 'd939be04-fb28-4678-8b08-7bfbed229ea7',
  },
  {
    id: 6, title: 'Плов', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[0],
    tags: [],
    imgId: '3c4b57f8-00a4-4186-8a73-6147c8a2fd14',
  },
  {
    id: 7, title: 'Шаверма', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[0],
    tags: [],
    imgId: '3db6e3eb-083d-4559-9377-7957282adc88',
  },
  {
    id: 8, title: 'Спагетти болоньезе', cookingTime: 60, steps: [], ingredients: [], createdAt: new Date(),
    category: CATEGORIES[2],
    tags: [],
    imgId: 'fda2ef2c-5951-4fa9-866c-288dd32f3458',
  },
];
