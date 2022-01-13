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
    ["Tomato", "Cheese"]),
    new Recipe(2,"pizza BBQ",
    "Freshly made pizza with BBQ sauce",
    "https://www.dominos.be/ManagedAssets/BE/product/PBBG/BE_PBBG_all_hero_7547.jpg?v171769573",
      ["Tomato", "Cheese", "BBQ sauce"]),
    new Recipe(3,"pizza veggie",
    "Freshly made pizza with no meat",
    "https://media.istockphoto.com/photos/homemade-veggie-pizza-with-mushrooms-peppers-picture-id842082336",
      ["Tomato", "Cheese", "Olives", "Onion"])]
  
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
