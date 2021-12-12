import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  userName: string = "";
  isDisabled: boolean = true
  
  onKeyCheckIfDataIsFull(event: any) {
    if (this.userName.length == 0) {
      this.isDisabled = true;
    }
    else {
      this.isDisabled = false;
    }
  }
  onClickResetUsername() {
    this.userName = "";
  }
}


