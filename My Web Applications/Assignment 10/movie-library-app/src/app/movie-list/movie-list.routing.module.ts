import { MovieListComponent } from './movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { LoginComponent } from '../authentication/component/login/login.component';

const routes: Routes = [
    { path: '', component: MovieListComponent},
    { path: 'details/:id', component: MovieDetailsComponent},
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieListRoutingModule {
}