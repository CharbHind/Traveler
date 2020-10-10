import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataUser = {
    email: '',
    password: ''
 };

 connected: boolean;
 
  constructor(public afAuth: AngularFireAuth , private router:Router) {
    this.afAuth.authState.subscribe(auth => {
        if(!auth){
          console.log('non connecte');
          this.connected = false  ; 
          this.router.navigateByUrl('login');
          this.dataUser = {
            email: '',
            password: ''
         };
        }else{
          console.log('bien connecte');
          this.connected = true;
          this.router.navigateByUrl('menu/home');
        }
    }
      );
   }

  ngOnInit() {
  }

  onLogin(user){
    console.log('email : '+this.dataUser.email); 
    console.log('password : '+this.dataUser.password); 
    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    /*let res= this.authService.login(user.username,user.password);
      if(res == true){
          this.router.navigateByUrl('menu');
      }else{
        this.router.navigateByUrl('login');
      }*/
      
    }
    

}
