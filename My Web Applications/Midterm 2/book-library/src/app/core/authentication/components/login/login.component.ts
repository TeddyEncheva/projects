import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/authentication.model';
import { EMAIL_REGEX } from '../../constants/validators.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formErrorMessage: string = "User doesn't exist";
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  loggedUser: User;
  isLogged: boolean | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX),
    ]);
    this.password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  errorEmailMessage(): string {
    return this.email.errors.pattern ? 'Not a valid e-mail' : 'Required';
  }

  onSubmit(): void {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.authService.authenticate(this.loginForm.value);
      this.authService.userLogged.subscribe((response) => {
        this.isLogged = response;
        this.loginForm.markAsPristine();
      });
    }
  }
}