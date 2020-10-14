import { MovieListComponent } from './movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesGuardService } from './components/favorites/guard/favorites-guard.service';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [FavoritesGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListRoutingModule {}
