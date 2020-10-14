import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieOverview } from 'src/app/movie-details/components/movie-overview/models/movieOverview.model';
import { MovieDetailsService } from './services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieOverview;
  constructor(
    private detailsMovie: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.detailsMovie
      .getMovieOverview(Number(this.route.snapshot.params['id']))
      .subscribe((data) => (this.movie = data));
  }
}
