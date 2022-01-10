import { Recipe } from './../Model/Recipe';
import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {


  constructor() { }
  @Input() Recipe:Recipe
  ngOnInit(): void {
  }

}
