import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { Ingredient } from '../../ingredient';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'fau-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
