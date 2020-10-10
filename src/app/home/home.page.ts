import { Component } from '@angular/core';
import {Place} from './place.model';
import { Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  place:Place[] =[
      {
     id_Place :2,
     id_User : 1,
     titre : "Ouad Bared",
     latitude : "dcs",
     longitude : "long",
     description : "Blassa zwina .....",
     photo : "assets/Images/img2.jpg"

      },
    {
     id_Place :2,
     id_User : 1,
     titre : "grotte friouato",
     latitude : "dcs",
     longitude : "long",
     description : "Blassa zwina .....",
     photo : "assets/Images/img1.jpg"

      },
    {
        id_Place :2,
        id_User : 1,
        titre : "Bab boudir",
        latitude : "dcs",
        longitude : "long",
        description : "Blassa zwina .....",
        photo : "assets/Images/img2.jpg"
   
         }
  ]
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };
  
  constructor(private router:Router,public afDB: AngularFireDatabase
    ) {}
  music()
  {
    this.router.navigateByUrl('place');

  }

  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }
}
