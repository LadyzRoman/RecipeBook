import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeInfoComponent} from './components/recipe-info/recipe-info.component';
import {TestUploadComponent} from './components/test-upload/test-upload.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterUserComponent} from './components/register-user/register-user.component';


const recipeRoutes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'undefined', redirectTo: '', pathMatch: 'full'},
  {path: ':category', component: RecipeListComponent},
  {path: ':category/:id', component: RecipeInfoComponent}

];

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: recipeRoutes},
  {path: 'upload', component: TestUploadComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
