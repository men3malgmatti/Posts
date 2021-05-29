import { Injectable } from '@angular/core';
import { AUTH_TOKEN } from 'src/app/constants';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }


  private _isAuthenticated = new BehaviorSubject<boolean>(false);


  get isAuthenticated() {
    return this._isAuthenticated.asObservable()
  }

  saveToken(token: string) {

    localStorage.setItem(AUTH_TOKEN, token);
    this._isAuthenticated.next(true);

  }

  autoLogin() {
    let token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      this._isAuthenticated.next(true)
    } else {
      this.logOut()
    }
  }

  logOut() {
    localStorage.removeItem(AUTH_TOKEN);
    this._isAuthenticated.next(false);
    this.router.navigate(['/auth'])
  }

}
