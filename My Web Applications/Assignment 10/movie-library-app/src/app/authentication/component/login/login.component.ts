import { Component, OnInit }  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/authentication.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
    message: string;
    loginForm: FormGroup;
    email: FormControl;
    password: FormControl;
    loggedUser: User;
    isLogged: boolean = false;

    constructor(private authService: AuthenticationService, private router: Router){
    }

    ngOnInit(): void{
        this.email = new FormControl('',[Validators.required, Validators.email]);
        this.password = new FormControl('',Validators.required);
        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        });
    }

    errorEmailMessage(): string{
        return this.email.errors.email ? 'Not a valid e-mail' : 'Required';
    }

    
    onSubmit(): void{
        event.preventDefault();
        if(this.loginForm.valid){
            try {
                this.authData();
                this.authService.userLogged.subscribe(response => { 
                    this.isLogged = response;
                    if (response) {
                        this.router.navigate(['/movies']);       
                    } 
                });
                if (!this.isLogged) {
                    this.message = 'User doesn\'t exist';
                    this.loginForm.markAsPristine();
                } 
            } catch (error) {
                console.log('Error:' + error);
            }
        } 
    }

    authData(): void{
        this.authService.authenticate((this.loginForm.value));
    }    
}