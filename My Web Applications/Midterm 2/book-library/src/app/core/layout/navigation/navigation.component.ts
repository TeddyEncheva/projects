import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';
import { User } from 'src/app/core/authentication/models/authentication.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loggedUser: User;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getLogged();
  }

  getLogged(): void {
    this.authService.userLogged.subscribe((response) => {
      this.loggedUser = this.authService.getLoggedUser();
    });
    this.loggedUser = this.authService.getLoggedUser();
  }

  signOut(): void {
    const confirmation = confirm('Are you sure you want to log out?');
    if (confirmation) {
      this.authService.logout();
    } else {
      event.preventDefault();
    }
  }
}
