import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'movies', 
    loadChildren: () => import ('./movie-list/movie-list.module').then(m => m.MovieListModule) 
  },
  { path: 'movies/details/:id',
   loadChildren: () => import ('./movie-details/movie-details.module').then(m => m.MovieDetailsModule)  
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
