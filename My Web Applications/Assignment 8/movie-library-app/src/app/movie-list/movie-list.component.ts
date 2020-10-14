import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { MovieService } from '../shared/movie.service';


@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html'
})

export class MovieListComponent implements OnInit{
    movies: Array<Movie>;

    constructor(private movieService: MovieService){
     }
   
    ngOnInit():void{
        this.movies = this.movieService.getMovies()
    }
}