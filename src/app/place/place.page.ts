import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
place:object =
      {
     id_Place :2,
     id_User : 1,
     titre : "Ouad Bared",
     latitude : "dcs",
     longitude : "long",
     description : "Blassa zwina .....",
     photo : "assets/Images/img2.jpg"

      }
  constructor() { }

  ngOnInit() {
  }

}
