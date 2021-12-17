import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";

export class ShoppingListService{
    ingredientsAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient('Tomato sauce', 1),
        new Ingredient('Mozzarella', 2)
      ];

    getIngredients(){
        //slice ritorna una copia dell'array
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }
    addIngredientsToShopping(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients); //... -> spread operator that turns an array into a list
        this.ingredientsAdded.emit(this.ingredients.slice());
    }
}