import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { FavoritesService } from '../../services/favorites.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  movies: Array<Movie> = [];
  localId: string;
  
  constructor(
    private favService: FavoritesService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getLocalId();
    this.getFavoriteMovies();
  }

  getFavoriteMovies(): void {
    if (this.localId) {
      this.favService.getFavorites(this.localId).subscribe((data) => {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            this.movies.push(data[key]);
          }
        }
      });
    }
  }

  getLocalId(): void {
    this.authService.getLocalId().subscribe((response) => {
      this.localId = response;
    });
  }
}
