import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


export const canActivateGuard: CanActivateFn = (route, state) => {
  
  const authservice = inject(AuthService)
  const router = inject(Router)

  if (authservice.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;

};


