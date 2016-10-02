import { Component } from '@angular/core';

@Component({
  selector: 'shop-welcome',
  templateUrl: './shop-welcome.component.html',
  styleUrls: ['./shop-welcome.component.scss']
})
export class ShopWelcomeComponent{
  welcomeMessage:string = "Welcome to Gandalf's Shop of Wonderful And Wondrous Things";
  constructor() { }
}
