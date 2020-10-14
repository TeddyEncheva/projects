import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieOverview } from 'src/app/shared/models/movieOverview';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  
  movie: MovieOverview;
  constructor(private movieService: MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getMovieOverview(Number(this.route.snapshot.params['id']))
    .subscribe(data => this.movie = data);
  }

}
