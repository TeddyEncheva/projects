import { Component, OnInit, OnChanges } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/movie.service';
import { Observable } from 'rxjs';
import { MoviePage } from '../shared/models/moviepage';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls:[ './movie-list.component.css'],
})

export class MovieListComponent implements OnInit{
    movies: MoviePage;
  
    constructor(private movieService: MovieService, private route:ActivatedRoute){
     }
     
     ngOnInit(){
        this.getMovieList();
     }

     private getMovieList(){
         this.movieService.getMovies().subscribe(data =>  this.movies = data);
     }
     
     public changePage(pageNumber: number){
        let result= this.movieService.getPage(pageNumber);
        result.subscribe(data => this.movies = data);
     }
    
}