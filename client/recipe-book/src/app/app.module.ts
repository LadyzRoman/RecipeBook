import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { TestUploadComponent } from './components/test-upload/test-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipePreviewComponent,
    RecipeInfoComponent,
    TestUploadComponent,
    TopNavigationComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
