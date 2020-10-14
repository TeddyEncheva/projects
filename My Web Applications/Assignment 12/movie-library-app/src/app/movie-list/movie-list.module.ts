import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './movie-list.component';
import { MovieListRoutingModule } from './movie-list.routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LikeButtonComponent } from './components/favorites/components/like-button/like-button.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieThumbnailComponent,
    PaginationComponent,
    FavoritesComponent,
    LikeButtonComponent,
  ],
  imports: [CommonModule, MovieListRoutingModule, SharedModule],
  exports: [MovieThumbnailComponent, LikeButtonComponent],
})
export class MovieListModule {}
