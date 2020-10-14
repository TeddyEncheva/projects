import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie-list/models/movie.model';
import { FavoritesService } from 'src/app/movie-list/services/favorites.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  @Input() movie: Movie;
  @Input() favoriteMoviesIds: Array<number>;
  @Input() localId: string;
  checked: boolean | null = null;

  constructor(private favService: FavoritesService, private router: Router) {}

  ngOnInit(): void {
    this.checkFavorites();
  }

  checkFavorites(): void {
    this.favoriteMoviesIds.forEach((movieId) => {
      if (movieId === this.movie.id) {
        this.checked = true;
      }
    });
  }

  likeClick(): void {
    event.stopPropagation();
    if (this.localId === null) {
      this.router.navigate(['login']);
    } else if (this.checked === null) {
      this.likeMovie();
    } else if (this.checked === true) {
      this.unlikeMovie();
    }
  }

  likeMovie(): void {
    this.favService.addFavorite(this.localId, this.movie);

    this.favService.added.pipe(take(1)).subscribe((response) => {
      this.checked = response;
    });
  }

  unlikeMovie(): void {
    this.favService.removeFavorite(this.localId, this.movie);

    this.favService.removed.pipe(take(1)).subscribe((response) => {
      if (response === true) {
        this.checked = null;
      }
    });
  }
}
