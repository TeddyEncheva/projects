import { Component, OnInit, Input } from '@angular/core';
import { MovieOverview } from 'src/app/movie-details/components/movie-overview/models/movieOverview.model';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css'],
})
export class MovieOverviewComponent implements OnInit {
  @Input() movie: MovieOverview;

  getGenres(genres: Array<any>): string {
    let names: string = '';
    if (genres.length > 1) {
      genres.forEach((genre) => {
        names += `${genre.name}, `;
      });
      names = names.replace(/,\s*$/, '');
      return names;
    }
    return genres[0].name;
  }

  constructor() {}

  ngOnInit(): void {}
}
