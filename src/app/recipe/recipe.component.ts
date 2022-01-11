import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Model/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  recipeDetail: Recipe;

  updateSelectedDetailRecipe(newRecipeDetail:Recipe) { 
    this.recipeDetail = newRecipeDetail;
  }

}
