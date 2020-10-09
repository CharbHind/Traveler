import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  logout() {
    localStorage.removeItem('myToken');
  }
  public authenticated:boolean;
  public token:string;
  constructor() { 
  }
  public login(username:string ,password:string ){
    if(username=='admin'&& password=='1234'){
        this.authenticated=true;  
        this.saveToken();
    }
    else{
      this.authenticated=false
    }
    return this.authenticated;
  }
  private saveToken(){
    this.token="mimi";
    localStorage.setItem("myToken",this.token);
  }
  public loadToken(){
    this.token = localStorage.getItem("myToken");
    if(this.token=="mimi"){
      this.authenticated=true;
    }else{
      this.authenticated = false;
    }
    return this.authenticated;
  }
}
