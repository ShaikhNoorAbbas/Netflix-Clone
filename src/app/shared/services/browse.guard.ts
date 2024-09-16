import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const browseGuard: CanActivateFn = () => {
  let route: Router = inject(Router);
  if (sessionStorage.getItem('loggedInUser')) {
    return true;
  } else {
    route.navigate(['/login']);
    return false;
  }
};
