import { RecipeService } from './../services/recipe.service';
import { Recipe } from './../Model/Recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { 
  }

  @Input() recipeDetail: Recipe = null;
  ngOnInit(): void {
    
  }
  



}
