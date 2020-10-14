import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './movie-details-page/movie-details/movie-details.component';
import { FullCastComponent } from './full-cast/full-cast.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FullReviewsComponent } from './full-reviews/full-reviews.component';


const routes: Routes = [
  { path: 'movies', component:MovieListComponent },
  { path: 'movies/details/:id', component:MovieDetailsComponent },
  { path: 'movies/details/:id/cast', component: FullCastComponent },
  { path: 'movies/details/:id/reviews', component: FullReviewsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
