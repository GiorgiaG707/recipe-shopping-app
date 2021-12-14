import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe('Pizza', 'A delicious pizza', 'https://media.istockphoto.com/photos/pepperoni-pizza-on-wooden-table-picture-id1301482898'),
    new Recipe('Chocolate Chip cookies', 'Some delicious cookies', 'https://media.istockphoto.com/photos/vegan-homemade-chocolate-chunk-cookies-on-cooling-rack-flat-lay-picture-id1294238220'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
