import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieThumbnailComponent } from './movie-list/components/movie-thumbnail/movie-thumbnail.component';
import { MovieImageComponent } from './shared/components/movie-image/movie-image.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieService } from './shared/movie.service';
import { MovieDetailsComponent } from './movie-details-page/movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-details-page/movie-overview/movie-overview.component';
import { TimeConverterPipe } from './shared/time-converter.pipe';
import { TopCastComponent } from './movie-details-page/top-cast/top-cast.component';
import { CastService } from './shared/cast.service';
import { TopReviewsComponent } from './movie-details-page/top-reviews/top-reviews.component';
import { ReviewService } from './shared/reviews.service';
import { FullCastComponent } from './full-cast/full-cast.component';
import { CastMemberComponent } from './shared/components/cast-member/cast-member.component';
import { FullReviewsComponent } from './full-reviews/full-reviews.component';
import { ReviewUnitComponent } from './shared/components/review-unit/review-unit.component';
import { HttpClientModule} from '@angular/common/http';
import { MovieRecommendationsComponent} from './movie-details-page/movie-recommendations/movie-recommendations.component'
import { ReadMoreComponent } from './shared/components/review-unit/read-more/read-more.component';
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
    ReviewUnitComponent,
    MovieRecommendationsComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService, CastService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
