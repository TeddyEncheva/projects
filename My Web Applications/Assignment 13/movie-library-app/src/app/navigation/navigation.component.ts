import { Component, OnInit } from '@angular/core';
import { User } from '../authentication/models/authentication.model';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  loggedUser: User;
  isLogged: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getLogged();
  }

  getLogged(): void {
    this.authService.userLogged.subscribe((response) => {
      this.isLogged = response;
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
