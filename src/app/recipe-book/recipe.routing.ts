import { Route } from '@angular/router';

import { RecipeBookComponent } from './recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const RECIPE_BOOK_ROUTES: Route = {
    path: 'recipe-book',
    children: [
        { path: '', component: RecipeBookComponent },
        { path: 'shopping-list', component: ShoppingListComponent }
    ]
}