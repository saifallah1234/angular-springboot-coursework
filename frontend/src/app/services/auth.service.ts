import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  authSubject = new Subject<boolean>();
  constructor() { }
  emitAuthSubject(){
    this.authSubject.next(this.isAuthenticated());
  }
  Signedin(){
    this.isAuth = true;
    this.emitAuthSubject()
    
  }
  signout(){
    this.isAuth = false;
    this.emitAuthSubject()
  }
  isAuthenticated():boolean{
    return this.isAuth;
  }
}
