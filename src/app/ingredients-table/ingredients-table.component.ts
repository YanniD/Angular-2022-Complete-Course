import { Ingredient } from './../Model/Ingredient';
import { IngredientService } from './../services/ingredient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.css']
})
export class IngredientTableComponent implements OnInit {
  Ingredients: Ingredient[];
  constructor(private IngredientService:IngredientService) { }

  ngOnInit(): void {
      this.Ingredients = this.IngredientService.Ingredients;
    this.IngredientService.reloadIngredientsArrayEvent.subscribe((newIngredientArray:Ingredient[]) => this.Ingredients = newIngredientArray)
  }

}
