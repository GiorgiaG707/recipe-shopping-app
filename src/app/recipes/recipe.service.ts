import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping.list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{

    public selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[]= [
        new Recipe('Pizza', 'A delicious pizza', 'https://media.istockphoto.com/photos/pepperoni-pizza-on-wooden-table-picture-id1301482898', [new Ingredient('Dough', 1), new Ingredient('Tomato sauce', 1), new Ingredient('Mozzarella', 1)]),
        new Recipe('Chocolate Chip cookies', 'Some delicious cookies', 'https://media.istockphoto.com/photos/vegan-homemade-chocolate-chunk-cookies-on-cooling-rack-flat-lay-picture-id1294238220', [new Ingredient('Flour', 100), new Ingredient('Eggs', 2), new Ingredient('butter', 100), new Ingredient('Chocolate chips', 10)]),
      ];

      constructor(private shoppinglistservice: ShoppingListService){

      }

      getRecipe(){
          return this.recipes.slice();
      }

      addRecipeInShoppingList(ingredients: Ingredient[]){
        this.shoppinglistservice.addIngredientsToShopping(ingredients);
      }
}