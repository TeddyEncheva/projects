import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TOKEN } from 'src/app/core/authentication/constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class MyVolumesGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userLogged: boolean = sessionStorage.getItem(TOKEN) === null;
    if (userLogged) {
      this.router.navigate(['search']);
    }
    return !userLogged;
  }
}
