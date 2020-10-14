import { AuthenticationService } from './authentication.service';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpTestingController: HttpTestingController;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
        { provide: Router, useValue: routerSpy },
      ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthenticationService);
  });
  
  afterEach(()=>{
    sessionStorage.clear();
  });

  it('should call post with the correct ULR when authenticating', fakeAsync(() => {
    service.authenticate({
      email: 'admin@admin.com',
      password: 'admin123',
    });

    const req = httpTestingController.expectOne(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM'
    );

    // Surrpress warnings
    expect().nothing();

    req.flush({
      email: 'admin@admin.com',
      username: '',
      localId: 'mock-token',
    });

    httpTestingController.verify();
    tick();
  }));

  it('should navigate to movies page upon successful login', fakeAsync(() => {
    service.authenticate({
      email: 'admin@admin.com',
      password: 'admin123',
    });

    const req = httpTestingController.expectOne(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM'
    );

    req.flush({
      email: 'admin@admin.com',
      username: '',
      localId: 'mock-token',
    });
    httpTestingController.verify();
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['movies']);
  }));

  it('should should post with the correct URL when registering', fakeAsync(() => {
    service.registerUser({
      email: 'admin@admin.com',
      password: 'admin123',
    });

    const req = httpTestingController.expectOne(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM'
    );

    // Surrpress warnings
    expect().nothing();

    httpTestingController.verify();
    tick();
  }));
});
