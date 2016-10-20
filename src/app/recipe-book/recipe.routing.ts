import { Route } from '@angular/router';

import { RecipeBookComponent } from './recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

export const RECIPE_BOOK_ROUTES: Route = {
    path: 'recipe-book',
    component: RecipeBookComponent,
    children: [
        { path: 'recipes', component: RecipesComponent },
        { path: 'shopping-list', component: ShoppingListComponent }
    ]
}