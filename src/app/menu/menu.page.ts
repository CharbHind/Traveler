import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


public menus=[
  {title:"Home",url:"/menu/home",icon:"assets/icon/nav.svg"},
  {title:"Profile",url:"/menu/profile",icon:"assets/icon/profile.svg"},
  {title:"weather",url:"/menu/weather",icon:"assets/icon/weather.svg"},
  {title:"Favoris",url:"/menu/favoris",icon:"assets/icon/favori.svg"},
  {title:"Log-out",url:"logout",icon:"assets/icon/logout.svg"}
]

  constructor(private router:Router , private auth:AuthenticationService) { }

  ngOnInit() {
  }


  onMenuItem(m){
   if(m.url=="logout"){
      this.auth.logout();
      this.router.navigateByUrl("/login");
    }else{
      this.router.navigateByUrl(m.url);
    }
    
  }

}
