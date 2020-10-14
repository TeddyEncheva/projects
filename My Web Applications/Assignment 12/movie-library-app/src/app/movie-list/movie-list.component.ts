import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MoviePage } from './models/moviepage.model';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from './services/favorites.service';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: MoviePage;
  currentPage: number = 1;
  lastPage: number;
  queryParams: string[] = ['page'];
  favoriteMoviesIds: Array<number>;
  localId: string;
  private subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private favService: FavoritesService,
    private authService: AuthenticationService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getLocalId();
    this.setPage();
    this.favorites();
  }

  setPage(): void {
    this.route.queryParamMap.subscribe((param) => {
      if (+param.get('page') > 1) {
        this.currentPage = +param.get('page');
      }
    });
    this.loadPage(this.currentPage);
  }

  getLocalId(): void {
    this.subscription = this.authService.getLocalId().subscribe((response) => {
      this.localId = response;
    });
  }

  favorites(): void {
    if (this.localId) {
      this.favService.getFavorites(this.localId).subscribe((data) => {
        this.favoriteMoviesIds = [];
        for (const key in data) {
          this.favoriteMoviesIds.push(+key);
        }
      });
    } else {
      this.favoriteMoviesIds = [];
    }
  }

  private loadPage(page: number): void {
    this.movieService.getByPage(page).subscribe((data) => {
      this.movies = data;
      this.lastPage = data.total_pages;
    });
  }
}
