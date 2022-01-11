import { Ingredient } from './../Model/Ingredient';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { RecipeItemComponent } from '../recipe/recipe-item.component';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef; 
  @ViewChild("amountInput") amountInputRef: ElementRef;

  @Output() ingredientCreatedEvent = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  addRecipe() {
    console.log(this.nameInputRef, this.amountInputRef);
    var name = this.nameInputRef.nativeElement.value
    var amount =this.amountInputRef.nativeElement.value
    var ingredient: Ingredient = new Ingredient(name, amount)
    this.ingredientCreatedEvent.emit(ingredient);
  }
}