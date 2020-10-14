import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails, User } from '../models/authentication.model';
import { take } from 'rxjs/internal/operators';
import { EventEmitter } from '@angular/core';
import { TOKEN, LOGGED_USER } from '../constants/auth.constants';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authApiUtl: string = 'https://identitytoolkit.googleapis.com/v1/';
  private firebaseApiKey: string =
    '?key=AIzaSyB_SfeLENmQKY3stWWPQNVE5F64MBMXWqU';
  private signIn: string = 'accounts:signInWithPassword';

  @Output() userLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() success: EventEmitter<boolean> = new EventEmitter<boolean>();
  private localId: BehaviorSubject<string | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {}

  getLocalId(): Observable<string> {
    return this.localId.asObservable();
  }

  authenticate(user: UserDetails): void {
    this.http
      .post<any>(
        `${this.authApiUtl}${this.signIn}${this.firebaseApiKey}`,
        JSON.stringify(user)
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          sessionStorage.setItem(TOKEN, response.idToken);
          sessionStorage.setItem(
            LOGGED_USER,
            JSON.stringify({
              email: response.email,
              username: response.username,
              localId: response.localId,
            })
          );
          this.userLogged.emit(true);
          this.localId.next(response.localId);
          this.router.navigate(['search']);
        },
        (error) => {
          console.log('Logging User Error: ', error);
          this.userLogged.emit(false);
        }
      );
  }

  getLoggedUser(): User {
    return JSON.parse(sessionStorage.getItem(LOGGED_USER));
  }

  logout(): void {
    sessionStorage.removeItem(LOGGED_USER);
    sessionStorage.removeItem(TOKEN);
    this.userLogged.emit(false);
    this.localId.next(null);
    this.router.navigate(['search']);
  }

  getAuthorizationHeader(): string {
    return 'Bearer ' + sessionStorage.getItem(TOKEN);
  }

  loadUser(user: User): void {
    this.localId.next(user.localId);
  }
}
