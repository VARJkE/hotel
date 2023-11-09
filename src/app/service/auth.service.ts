import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { 

  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  };

  getToken() {
    return localStorage.getItem('token');
  };

  removeToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  };

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if(userInfo.email === 'lado.chopinovi@gmail.com' && userInfo.password === 'Aa123123') {
      this.setToken('ASjhdsadjsadi87das8d78sadSdsf')
      return of (true)
    }
    return throwError( () => new Error('Incorrect Login'))
  }

  logout() {
    this.router.navigate(['login'])
  }
}
