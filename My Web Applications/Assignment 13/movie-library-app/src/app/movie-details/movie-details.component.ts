import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieOverview } from 'src/app/movie-details/components/movie-overview/models/movieOverview.model';
import { MovieDetailsService } from './services/movie-details.service';
import { FavoritesService } from '../movie-list/services/favorites.service';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { Subscription } from 'rxjs';
import { Movie } from '../movie-list/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: MovieOverview;
  localId: string;
  favoriteMovie: Movie;
  isFavorite: boolean | null = null;
  movieId: number = Number(this.route.snapshot.params['id']);
  private subscription: Subscription = new Subscription();

  constructor(
    private detailsMovie: MovieDetailsService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private favService: FavoritesService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getMovieDetails();
    this.getLocalId();
    this.favorites();
  }

  getMovieDetails(): void {
    this.detailsMovie
      .getMovieOverview(Number(this.route.snapshot.params['id']))
      .subscribe((data) => (this.movie = data));
  }

  favorites(): void {
    if (this.localId) {
      this.favService.getFavorites(this.localId).subscribe((data) => {
        for (const key in data) {
          if (+key === this.movieId) {
            this.favoriteMovie = data[key];
            this.isFavorite = true;
          } else{
            this.isFavorite =  false;
          }
        }
      });
    } else{
      this.isFavorite = false;
    }
  }

  getLocalId(): void {
    this.subscription = this.authService.getLocalId().subscribe((data) => {
      this.localId = data;
    });
  }
}
