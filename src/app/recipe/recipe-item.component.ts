import { RecipeService } from './../services/recipe.service';
import { Recipe } from '../Model/Recipe';
import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  
  constructor(private recipeService:RecipeService) { }
  @Input() Recipe: Recipe
  
  ngOnInit(): void {
  }

}
