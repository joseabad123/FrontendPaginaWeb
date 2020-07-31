import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

import { CanActivate } from '@angular/router/';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsCoordinadorGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) { }
//Guards
canActivate() {
  if(this.authService.getUserCoordinador()){
    console.log(this.authService.getUserCoordinador())
    return true;
  }else{
    this.router.navigate(['/administracion'])
    console.log(this.authService.getUserCoordinador())
    return false;
    
  }
}
 
 
}
