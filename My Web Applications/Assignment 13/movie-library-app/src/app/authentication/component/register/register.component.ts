import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDetails } from '../../models/authentication.model';
import { AuthenticationService } from '../../services/authentication.service';
import { matchValidator } from './validators/match-validator.directive';
import { EMAIL_REGEX } from '../../constants/validators.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  messageSubmit: string;
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
  success: boolean | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.passwordConfirm = new FormControl('', Validators.required);
    this.registerForm = new FormGroup(
      {
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      },
      {
        validators: [matchValidator],
      }
    );
  }

  errorEmailMessage(): string {
    return this.email.errors.required ? 'Required' : 'Not a valid e-mail';
  }

  passwordErrorMessage(): string {
    return this.password.errors.required
      ? 'Required'
      : 'Password needs to be at least 6 symbols';
  }

  confirmErrorMessage(): string {
    if (this.passwordConfirm.touched) {
      return this.passwordConfirm.value === ''
        ? 'Required'
        : "Password doesn't match";
    }
  }

  onSubmit(): void {
    event.preventDefault();
    if (this.registerForm.valid) {
      let email: string = this.registerForm.get('email').value;
      let password: string = this.registerForm.get('password').value;
      let registerDetails: UserDetails = { email, password };

      this.authService.registerUser(registerDetails);
      this.authService.success.subscribe((response) => {
        this.success = response;
        this.messageSubmit = !this.success
          ? 'Invalid data/User already exists'
          : 'Registration successful';
        this.registerForm.markAsPristine();
      });
    }
  }
}
