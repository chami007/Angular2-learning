import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormHomeComponent } from './forms/components/form-home.component';
import { FORM_ROUTES } from './forms/form.routing';
import { ROUTE_ROUTES } from './routers/router.routing';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RECIPE_BOOK_ROUTES } from './recipe-book/recipe.routing';
import { CustomDirectiveTestComponent } from './directives/custom-directive-test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'custom-directives', component: CustomDirectiveTestComponent },
  { path: 'forms', component: FormHomeComponent },
  { path: 'recipe-book', pathMatch:'full', redirectTo: 'recipe-book/recipes' },
  FORM_ROUTES,
  ROUTE_ROUTES,
  RECIPE_BOOK_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DemoAppRoutingModule { }
