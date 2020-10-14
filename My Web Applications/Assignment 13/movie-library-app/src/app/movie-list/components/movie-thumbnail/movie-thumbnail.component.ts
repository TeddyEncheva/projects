import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
})
export class MovieThumbnailComponent {
  @Input() movie: Movie;
  @Input() favoriteMoviesIds: Array<number>;
  @Input() localId: string;

  constructor(private router: Router) {}
  redirectToDetails(): void {
    this.router.navigate(['/movies/details', this.movie.id]);
  }
}
