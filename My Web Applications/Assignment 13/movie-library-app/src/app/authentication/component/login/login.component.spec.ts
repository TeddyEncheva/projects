import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginComponent } from './login.component';
import {
  fakeAsync,
  tick,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { EMAIL_REGEX } from '../../constants/validators.constants';

describe('LoginComponent', () => {
  //   let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginCombinations;
  let mockAuthenticationService;

  beforeEach(() => {
    loginCombinations = [
      // valid
      {
        email: new FormControl('admin@admin.com', [
          Validators.required,
          Validators.pattern(EMAIL_REGEX),
        ]),
        password: new FormControl('admin123'),
      },
      // invalid email
      {
        email: new FormControl('admin', [
          Validators.required,
          Validators.pattern(EMAIL_REGEX),
        ]),
        password: new FormControl('admin123'),
      },
      // missing input
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(EMAIL_REGEX),
        ]),
        password: new FormControl(''),
      },
    ];

    mockAuthenticationService = jasmine.createSpyObj(['authenticate', 'userLogged']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthenticationService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(LoginComponent);
  });

  describe('onSubmit', () => {
    it('should give valid form when valid data is passed', fakeAsync(() => {
      fixture = TestBed.createComponent(LoginComponent);
      let form = fixture.componentInstance.loginForm;
      form = new FormGroup(loginCombinations[0]);
      fixture.detectChanges();
      tick();

      fixture.componentInstance.onSubmit();
    
      expect(form.valid).toBeTrue();
    }));

    it('should give invalid form when invalid data is passed', fakeAsync(() => {
      fixture = TestBed.createComponent(LoginComponent);
      let form = fixture.componentInstance.loginForm;
      form = new FormGroup(loginCombinations[1]);
      fixture.detectChanges();
      tick();
     
      expect(form.valid).toBeFalse();
    }));
  });
});
