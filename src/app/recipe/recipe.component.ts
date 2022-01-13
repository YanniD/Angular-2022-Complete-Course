import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Model/Recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    
  }
  

}
