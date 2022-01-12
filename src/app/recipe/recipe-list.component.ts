import { RecipeService } from './../services/recipe.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() selectedRecipeChangedEvent = new EventEmitter<Recipe>();

  Recipes: Recipe[] = [];

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.Recipes = this.recipeService.Recipes;
  }

  initSelectedRecipeChangedEvent(recipe:Recipe) {
    this.selectedRecipeChangedEvent.emit(recipe);
    console.log(recipe);
  }
  
}
