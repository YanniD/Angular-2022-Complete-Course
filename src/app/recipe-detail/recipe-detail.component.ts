import { IngredientService } from './../services/ingredient.service';
import { Ingredient } from './../Model/Ingredient';
import { RecipeService } from './../services/recipe.service';
import { Recipe } from './../Model/Recipe';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private recipeService: RecipeService,private IngredientService:IngredientService) { 
  }

  recipeDetail: Recipe = null;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeDetail = this.recipeService.getRecipeById(params["id"]);
    })
  }

  exportIngredients() {
    this.IngredientService.nextGetIngredientsFromRecipe(this.recipeDetail.ingredients)
  }
  



}
