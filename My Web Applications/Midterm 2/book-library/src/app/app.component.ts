import { Component, OnInit } from '@angular/core';
import { LOGGED_USER } from './core/authentication/constants/auth.constants';
import { User } from './core/authentication/models/authentication.model';
import { AuthenticationService } from './core/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'book-library';

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    const loggedUser: User = JSON.parse(sessionStorage.getItem(LOGGED_USER));

    if (loggedUser) {
      this.authenticationService.loadUser(loggedUser);
    }
  }
}
