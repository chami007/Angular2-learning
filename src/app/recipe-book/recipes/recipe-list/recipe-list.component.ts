import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../../ingredient';

@Component({
  selector: 'fau-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Curry', 'Juicy king prawns are cooked with spices and coconut milk in this tasty curry ', 'http://rachelmoger.com/wp-content/uploads/2014/07/Chicken-Curry.jpg'),
    new Recipe('Butter chicken', 'Juicy lamb is marinated in a spiced yoghurt sauce and slowcooked until tender', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6C_MqymnZOZKRQGMOsxMWECD_Q5QR4mTdb3dhg5nK9JbHXnrt'),
    new Recipe('Tandoori chicken tikka', 'Tandoori chicken skewers with a classic butter sauce of cream, tomatoes, spices and ', 'https://majurakitchengarden.files.wordpress.com/2013/09/vegie-curry.jpg'),
    new Recipe('Red lentil tadka dal', 'These classic chicken skewers are marinated in a spiced yoghurt sauce', 'http://images.media-allrecipes.com/userphotos/250x250/269404.jpg'),
    new Recipe('Keralan chicken curry', 'Spicy chicken curry is mellowed with cool yoghurt and coconut milk', 'http://images.bigoven.com/image/upload/t_recipe-256/sweet-beef-curry-3.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
