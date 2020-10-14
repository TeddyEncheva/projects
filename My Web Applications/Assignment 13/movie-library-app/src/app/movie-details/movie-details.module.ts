import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';
import { TopCastComponent } from './components/top-cast/top-cast.component';
import { TopReviewsComponent } from './components/top-reviews/top-reviews.component';
import { MovieDetailsService } from './services/movie-details.service';
import { FullCastModule } from '../full-cast/full-cast.module';
import { SharedModule } from '../shared/shared.module';
import { TimeConverterPipe } from './components/movie-overview/pipes/time-converter.pipe';
import { FullReviewsModule } from '../full-reviews/full-reviews.module';
import { MovieListModule } from '../movie-list/movie-list.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details.routing.module';
import { PersonalNoteComponent } from './components/movie-overview/components/personal-note/personal-note.component';
import { FormsModule } from '@angular/forms';
import { FavoritesService } from '../movie-list/services/favorites.service';

@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieOverviewComponent,
    MovieRecommendationsComponent,
    TopCastComponent,
    TopReviewsComponent,
    TimeConverterPipe,
    PersonalNoteComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    FullCastModule,
    FullReviewsModule,
    SharedModule,
    MovieListModule,
    FormsModule
  ],
  providers: [MovieDetailsService],
})
export class MovieDetailsModule {}
