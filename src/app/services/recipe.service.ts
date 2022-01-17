import { Ingredient } from './../Model/Ingredient';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../Model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

    private _recipes: Recipe[] = [new Recipe(1,"pizza mozerlla",
    "Authentic standard Italian pizza",
    "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=",
    [new Ingredient(6,"Tomato",5), new Ingredient(7,"Cheese",3)]),
    new Recipe(2,"pizza BBQ",
    "Freshly made pizza with BBQ sauce",
    "https://www.dominos.be/ManagedAssets/BE/product/PBBG/BE_PBBG_all_hero_7547.jpg?v171769573",
      [new Ingredient(6,"Tomato",5), new Ingredient(7,"Cheese",3),new Ingredient(8,"BBQ sauce",3)]),
    new Recipe(3,"pizza veggie",
    "Freshly made pizza with no meat",
    "https://media.istockphoto.com/photos/homemade-veggie-pizza-with-mushrooms-peppers-picture-id842082336",
      [new Ingredient(6,"Tomato",5), new Ingredient(7,"Cheese",3),new Ingredient(9,"Olives",3),new Ingredient(9,"Onion",3)])]
  
  public get Recipes() : Recipe[] {
    return this._recipes;
  }

  
  /* selectedRecipeEvent = new EventEmitter<Recipe>();

  public newSelectedRecipeEventEmit(recipe: Recipe) {
    console.log("emmit function called with recipe: " + recipe.title);
    this.selectedRecipeEvent.emit(recipe);
    console.log("emit done")  
  } */
  
  public getRecipeById(id: number): Recipe {
    let recipe = this.Recipes.find(x => x.id == id);
    return recipe;
  }

  

  
}
