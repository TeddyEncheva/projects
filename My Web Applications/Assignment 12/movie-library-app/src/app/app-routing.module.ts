import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./movie-list/movie-list.module').then((m) => m.MovieListModule),
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'movies/details/:id',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
