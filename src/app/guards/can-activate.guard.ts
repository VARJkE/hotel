import { Injectable, Injector, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

// @Injectable( {
//   providedIn: 'root'
// })

// export class CanActivateGuard {

//   constructor(
//     private router: Router,
//     private authService: AuthService
//   ) {}

//   canActivateGuard: CanActivateFn = (route, state) => {
//     if (!this.authService.isLoggedIn()) {
//       this.router.navigate(['test'])
//       return true;
//     }
//     return true;

// }

export const canActivateGuard: CanActivateFn = (route, state) => {
  
  const authservice = inject(AuthService)
  if (!authservice.isLoggedIn()) {
    return true
  }
  return true;

};


