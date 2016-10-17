import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DemoAppRoutingModule } from './app-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormHomeComponent } from './forms/components/form-home.component';
import { FormExample1Component } from './forms/components/form-example1/form-example1.component';
import { RouterExample1Component } from './routers/example1/router-example1.component';
import { RoutingExample1AboutComponent } from './routers/example1/routing-example1-about.component';
import { HeaderComponent } from './recipe-book/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { RecipeListComponent } from './recipe-book/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './recipe-book/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './recipe-book/shopping-list/shopping-list-add.component';
import { StdDropdownDirective } from './recipe-book/directives/std-dropdown.directive';
import { ShoppingListService } from './recipe-book/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormHomeComponent,
    FormExample1Component,
    RouterExample1Component,
    RoutingExample1AboutComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    StdDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DemoAppRoutingModule,
    SimpleNotificationsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
