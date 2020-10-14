import { Component, OnInit } from '@angular/core';
import { User } from './authentication/models/authentication.model';
import { LOGGED_USER } from './authentication/constants/auth.constants';
import { AuthenticationService } from './authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const loggedUser: User = JSON.parse(sessionStorage.getItem(LOGGED_USER));

    if (loggedUser) {
      this.authenticationService.loadUser(loggedUser);
    }
  }
}
