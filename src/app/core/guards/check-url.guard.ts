import { CanActivateFn } from '@angular/router';

export const checkURLGuard: CanActivateFn = (route, state) => {
  return true;
};
