import { Ingredient } from './../Model/Ingredient';
import { IngredientService } from './../services/ingredient.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { map,filter,flatMap } from 'rxjs/operators';
@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.css']
})
export class IngredientTableComponent implements OnInit {
  Ingredients: Ingredient[];
  constructor(private IngredientService:IngredientService) { }
  private ingredientSubscription: Subscription
  ngOnInit(): void {
      this.Ingredients = this.IngredientService.Ingredients;
    this.IngredientService.reloadIngredientsArrayEvent.subscribe((newIngredientArray: Ingredient[]) => this.Ingredients = newIngredientArray)
    this.ingredientSubscription = this.IngredientService.getIngredientsFromRecipe().pipe(map((newIngredients: Ingredient[] )=> {
      let newarray = newIngredients.filter((x): x is Ingredient => !this.Ingredients.some((y): y is Ingredient => y.Name === x.Name));  
      console.log(newarray)
      return newarray;
    })).subscribe((newIngredients: Ingredient[]) => {
      //console.log(this.Ingredients, "new:", ...newIngredients)
      this.Ingredients.push(...newIngredients)    
    }
      
    );
  }

  ngOnDestroy(): void{
    this.ingredientSubscription.unsubscribe();
  }

}
