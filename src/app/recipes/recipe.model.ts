import { Ingredient } from "../shared/ingredient-model";

export class Recipe{
    public name: string;
    public description: string;
    public picturePath: string;
    public ingredients: Ingredient[];

    constructor(name:string, description:string, picturePath:string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.picturePath = picturePath;
        this.ingredients= ingredients;
    }
}