import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{

  isAuth:boolean = false;
  constructor(private authService: AuthService){}
  ngOnInit(): void { 
    this.isAuth = this.authService.isAuthenticated();
   }

  onSignIn(){
    this.authService.Signedin();
    this.isAuth = this.authService.isAuthenticated();
  }
  onSignOut(){
    this.authService.signout()
    this.isAuth = this.authService.isAuthenticated();
  }

}
