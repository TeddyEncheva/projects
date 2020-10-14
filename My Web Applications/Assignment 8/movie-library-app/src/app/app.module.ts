import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieThumbnailComponent } from './movie-list/components/movie-thumbnail/movie-thumbnail.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieService } from './shared/movie.service';
import { MovieDetailsComponent } from './movie-details-page/movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-details-page/movie-overview/movie-overview.component';
import { AstraService } from './shared/astra.service';
import { TimeConverterPipe } from './shared/time-converter.pipe';
import { TopCastComponent } from './movie-details-page/top-cast/top-cast.component';
import { CastService } from './shared/cast.service';
import { TopReviewsComponent } from './movie-details-page/top-reviews/top-reviews.component';
import { ReviewService } from './shared/reviews.service';
import { FullCastComponent } from './full-cast/full-cast.component';
import { CastMemberComponent } from './cast-member/cast-member.component';
import { FullReviewsComponent } from './full-reviews/full-reviews.component';
import { ReviewUnitComponent } from './review-unit/review-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieImageComponent,
    NavigationComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    TimeConverterPipe,
    TopCastComponent,
    TopReviewsComponent,
    FullCastComponent,
    CastMemberComponent,
    FullReviewsComponent,
    ReviewUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService, AstraService, CastService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
