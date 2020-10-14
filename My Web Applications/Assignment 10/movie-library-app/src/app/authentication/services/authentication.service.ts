import { Injectable, Output } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { UserDetails, User} from '../models/authentication.model';
import {take} from 'rxjs/internal/operators';
import { EventEmitter } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})

export class AuthenticationService {
    private authApiUtl:string ='https://identitytoolkit.googleapis.com/v1/';
    private firebaseApiKey:string = '?key=AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM';
    private route: string = 'accounts:signInWithPassword';

    EMAIL:string = 'email';
    TOKEN: string = 'token';
    LOGGED_USER: string = 'LoggedUser';
    @Output() userLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(private http: HttpClient){
    }

    
    authenticate(user: UserDetails): void {
        this.http.post<any>(`${this.authApiUtl}${this.route}${this.firebaseApiKey}`,
        JSON.stringify(user))
        .pipe(take(1)).subscribe(response => {
            sessionStorage.setItem(this.TOKEN, JSON.stringify(response.idToken));
            sessionStorage.setItem(this.LOGGED_USER, JSON.stringify({
            email: response.email,
            username: response.displayName}));
            this.userLogged.emit(true);
        });
    }

    getLoggedUser(): User{
        return JSON.parse(sessionStorage.getItem(this.LOGGED_USER));
    }

    logout(): void {
       sessionStorage.removeItem(this.LOGGED_USER);
       sessionStorage.removeItem(this.TOKEN);
    }


    getAuthorizationHeader(): string {
        return 'Bearer ' + sessionStorage.getItem(this.TOKEN);
    }
}
