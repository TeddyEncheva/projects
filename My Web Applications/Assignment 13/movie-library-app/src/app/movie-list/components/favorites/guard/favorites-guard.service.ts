import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TOKEN } from 'src/app/authentication/constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class FavoritesGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userLogged: boolean = sessionStorage.getItem(TOKEN) !== null;
    if (!userLogged) {
      this.router.navigate(['login']);
    }
    return userLogged;
  }
}
