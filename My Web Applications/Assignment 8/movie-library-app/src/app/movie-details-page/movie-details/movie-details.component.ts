import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { Movie } from '../../movie-list/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  
  movie: Movie;
  constructor(private movieService: MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.movie = this.movieService.getMovie(Number(this.route.snapshot.params['id']))
  }

}
