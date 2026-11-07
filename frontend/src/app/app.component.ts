import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'first-project';
  isAuth:boolean = false;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.authSubject.subscribe({
      next: (isAuth:boolean) => this.isAuth = isAuth
    })
    this.authService.emitAuthSubject();
  }
}
