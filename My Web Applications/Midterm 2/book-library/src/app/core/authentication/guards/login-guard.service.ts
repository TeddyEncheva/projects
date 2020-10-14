import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TOKEN } from '../constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userLogged: boolean = sessionStorage.getItem(TOKEN) !== null;
    if (userLogged) {
      this.router.navigate(['search']);
    }
    return !userLogged;
  }
}
