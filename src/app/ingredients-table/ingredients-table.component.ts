import { Ingredient } from '../Model/Ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.css']
})
export class IngredientTableComponent implements OnInit {
  Ingredients: Ingredient[] = [new Ingredient("tomato", 12),
                                            new Ingredient("Cheese", 10),
                                            new Ingredient("BBQ sauce", 3),
                                            new Ingredient("Olives",40)]
  constructor() { }

  ngOnInit(): void {
  }

  pushIngredientToTable(ingredient: Ingredient) {
    this.Ingredients.push(ingredient);
  }

}
