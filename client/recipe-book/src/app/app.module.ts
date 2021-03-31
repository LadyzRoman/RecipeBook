import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { TestUploadComponent } from './components/test-upload/test-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { PrettyUnitPipe } from './pipes/pretty-unit.pipe';
import { RecipeStepComponent } from './components/recipe-step/recipe-step.component';
import { LoginComponent } from './components/login/login.component';
import {BasicAuthInterceptor} from './helpers/basic-auth.interceptor';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipePreviewComponent,
    RecipeInfoComponent,
    TestUploadComponent,
    TopNavigationComponent,
    RecipesComponent,
    SearchPanelComponent,
    PrettyUnitPipe,
    RecipeStepComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
