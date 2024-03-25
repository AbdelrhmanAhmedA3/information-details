import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkURLGuard } from './check-url.guard';

describe('checkURLGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkURLGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
