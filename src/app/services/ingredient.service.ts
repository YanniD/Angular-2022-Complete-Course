import { Ingredient } from './../Model/Ingredient';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  reloadIngredientsArrayEvent: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()

  private _ingredients: Ingredient[] = [new Ingredient(1,"Tomato", 12),
                                            new Ingredient(2,"Cheese", 10),
                                            new Ingredient(3,"BBQ sauce", 3),
    new Ingredient(4,"Olives", 40)]
  
  
  public get Ingredients(): Ingredient[] {
    console.log(this._ingredients);
    return this._ingredients;
  }
  public set Ingredients(newIngredients:Ingredient[]) {
    this._ingredients = newIngredients
  }

  constructor() { }

  addNewIngredient(ingredient: Ingredient) { 
    this.Ingredients.push(ingredient);
    this.reloadIngredientsArrayEvent.emit(this.Ingredients)
  }

  deleteIngredient(name: string) {
    const index = this.Ingredients.map(x => x.Name).indexOf(name);
    this.Ingredients.splice(index,1)
    this.reloadIngredientsArrayEvent.emit(this.Ingredients)
  }

  private ingredientSubject = new BehaviorSubject<Ingredient[]>([]);

  getIngredientsFromRecipe() {
    return this.ingredientSubject.asObservable();
  }

  nextGetIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredientSubject.next(ingredients);
  }
  
}
