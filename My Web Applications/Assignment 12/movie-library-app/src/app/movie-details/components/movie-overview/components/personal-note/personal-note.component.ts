import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/movie-list/services/favorites.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie-list/models/movie.model';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-personal-note',
  templateUrl: './personal-note.component.html',
  styleUrls: ['./personal-note.component.css'],
})
export class PersonalNoteComponent implements OnInit {
  personalNote: string;
  @Input() localId: string;
  @Input() favoriteMovie: Movie;
  success: string;
  movieId: number = Number(this.route.snapshot.params['id']);

  constructor(
    private favService: FavoritesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.favoriteMovie) {
      this.personalNote = this.favoriteMovie.personalNote;
    }
  }

  onSubmit(): void {
    this.favService.editNote(this.localId, this.movieId, this.personalNote);
    this.favService.updated.pipe(take(1)).subscribe((data) => {
      this.success = 'saved';
    });
  }
}
