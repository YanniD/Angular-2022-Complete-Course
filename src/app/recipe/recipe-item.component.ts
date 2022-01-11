import { Recipe } from '../Model/Recipe';
import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() selectedRecipeEvent = new EventEmitter<null>();
  constructor() { }
  @Input() Recipe: Recipe
  
  ngOnInit(): void {
  }

  selectedRecipe() {
    this.selectedRecipeEvent.emit();
    console.log("e,ittd")
  }

}
