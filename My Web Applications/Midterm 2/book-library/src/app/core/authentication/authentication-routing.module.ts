import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {APP_ROUTES} from '../../constants/app.routes';
import { LoginGuardService } from './guards/login-guard.service';


const routes: Routes = [
    {
        path: APP_ROUTES.authentication.children.login,
        component: LoginComponent,
        canActivate: [LoginGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
