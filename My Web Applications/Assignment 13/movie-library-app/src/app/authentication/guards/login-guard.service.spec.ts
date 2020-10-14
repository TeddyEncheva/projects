import { LoginGuardService } from './login-guard.service';
import { Router } from '@angular/router';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TOKEN } from '../constants/auth.constants';

describe('LoginGuardService', () => {
  let guard: LoginGuardService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardService, { provide: Router, useValue: routerSpy }],
    });
    guard = TestBed.get(LoginGuardService);
    sessionStorage.clear();
  });

  it('should NOT be able to activate when logged in', () => { 
    sessionStorage.setItem(TOKEN, 'mock-token');
    const response = guard.canActivate();

    expect(response).toBeFalsy();
  });

  it('should navigate to movies when logged in', fakeAsync(() => { 
    sessionStorage.setItem(TOKEN, 'mock-token');
    const response = guard.canActivate();
    
    expect(response).toBeFalsy();
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['movies']);
  }));

  it('should be able to activate when logged out', () => {
    const response = guard.canActivate();
    
    expect(response).toBeTruthy();
  });
});
