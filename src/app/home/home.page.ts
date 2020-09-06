import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Place = {
    name :"friouato",
    user : "By hind charb",
    photo : "assets/Images/img2.jpg"
      
  }
  constructor() {}

}
