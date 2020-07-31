import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserCService } from 'src/app/services/user-c.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
public is_SuperAdmin :boolean;

public is_Admin:boolean;
  constructor(private authService:AuthService, private router: Router, private userService:UserCService) { }


  ngOnInit() {
    this.isSuperAdmin();
    this.isCoordinador();
   
  }
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  // sidenavEvents(str) {
  //   console.log(str);
// }
logout(){
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('currentUser');
  this.router.navigateByUrl('/sistemas');
 
}

isSuperAdmin(){
  if( this.authService.getUserSuper_admin()){
 this.is_SuperAdmin=true;
 
  }else{
    this.is_SuperAdmin=false;
  }
 }
 isCoordinador(){
  if( this.authService.getUserCoordinador()){
    this.is_Admin=true;
    
     }else{
       this.is_Admin=false;
     }
 }

}
