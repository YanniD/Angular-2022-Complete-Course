import { Component } from '@angular/core';
import { Recipe } from './Model/Recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`.white{
        color:white
  }`
  ]
})

 export class AppComponent {
//   title = 'my-first-app';
//   userName: string = "";
//   isDisabled: boolean = true
//   showParagraph: boolean = false;
//   arrayLogAmount: Array<Number> = [];
  // onKeyCheckIfDataIsFull(event: any) {
  //   if (this.userName.length == 0) {
  //     this.isDisabled = true;
  //   }
  //   else {
  //     this.isDisabled = false;
  //   }
  // }
  // onClickResetUsername() {
  //   this.userName = "";
  // }
  // onClickLogToggle() {
  //   this.showParagraph = !this.showParagraph;
  //   this.arrayLogAmount.push(this.arrayLogAmount.length + 1);
  // }

  Recipes: Recipe[] = [new Recipe("pizza mozerlla",
    "Authentic standard Italian pizza",
    "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=",
    ["Tomato", "Cheese"]),
    new Recipe("pizza BBQ",
    "Freshly made pizza with BBQ sauce",
    "https://www.dominos.be/ManagedAssets/BE/product/PBBG/BE_PBBG_all_hero_7547.jpg?v171769573",
      ["Tomato", "Cheese", "BBQ sauce"]),
    new Recipe("pizza veggie",
    "Freshly made pizza with no meat",
    "https://media.istockphoto.com/photos/homemade-veggie-pizza-with-mushrooms-peppers-picture-id842082336",
    ["Tomato", "Cheese","BBQ sauce"])]
  

}


