import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  const authService = inject(AuthService);

  if (confirm('Are you sure?')) {
    authService.removeToken();
    return true;
  }

  return false;
};
