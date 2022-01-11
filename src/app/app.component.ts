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

  ShowPage: string = "recipe";
  updatePage(page: string) { 
    this.ShowPage = page;
  }
    
}


