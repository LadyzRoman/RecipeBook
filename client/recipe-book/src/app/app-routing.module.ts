import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeInfoComponent} from './components/recipe-info/recipe-info.component';
import {TestUploadComponent} from './components/test-upload/test-upload.component';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/:id', component: RecipeInfoComponent},
  {path: 'upload', component: TestUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
