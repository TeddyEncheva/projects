import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movie-list/models/movie.model';
import { FAVORITE_BASE_URL, FAVORITE_API_KEY } from 'src/app/constants/api';
import { take } from 'rxjs/internal/operators';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  @Output() added: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

  getFavorites(localId: string): Observable<any> {
    if (localId) {
      return this.http.get<any>(
        `${FAVORITE_BASE_URL}/favorites/${localId}.json?key=${FAVORITE_API_KEY}`
      );
    }
  }

  addFavorite(localId: string, movie: Movie): void {
    this.http
      .put<Movie>(
        `${FAVORITE_BASE_URL}/favorites/${localId}/${movie.id}.json?key=${FAVORITE_API_KEY}`,
        JSON.stringify(movie)
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.added.emit(true);
        },
        (error) => {
          this.added.emit(false);
        }
      );
  }

  removeFavorite(localId: string, movie: Movie): void {
    this.http
      .delete<Movie>(
        `${FAVORITE_BASE_URL}/favorites/${localId}/${movie.id}.json?key=${FAVORITE_API_KEY}`
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.removed.emit(true);
        },
        (error) => {
          this.removed.emit(false);
        }
      );
  }

  editNote(localId: string, movieId: number, note: string): void {
    this.http
      .patch<Movie>(
        `${FAVORITE_BASE_URL}/favorites/${localId}/${movieId}.json?key=${FAVORITE_API_KEY}`,
        JSON.stringify({ personalNote: note })
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.updated.emit(true);
        },
        (error) => {
          console.log(error);
          this.updated.emit(false);
        }
      );
  }
}
