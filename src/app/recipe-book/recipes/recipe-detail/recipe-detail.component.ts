import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'fau-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private shoopingListService: ShoppingListService) {
    console.log(this.selectedRecipe);
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoopingListService.addItems(this.selectedRecipe.ingredient);
  }

}
