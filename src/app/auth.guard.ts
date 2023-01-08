import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (public myRout:Router, public ser : UserService){}

  canActivate(): boolean {
    if(!localStorage.getItem("continents")){
      localStorage.clear();
      alert("Need to Register")
      this.myRout.navigateByUrl("/registration")
    }
    return true;
  }
  
}
