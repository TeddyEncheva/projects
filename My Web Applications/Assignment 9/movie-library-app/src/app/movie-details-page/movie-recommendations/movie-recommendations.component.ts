import { Component, OnInit, OnChanges } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { MoviePage } from '../../shared/models/moviepage';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-movie-recommendations',
    templateUrl: './movie-recommendations.component.html',
     styleUrls:[ './movie-recomendations.component.css'],
})

export class MovieRecommendationsComponent implements OnInit{
    movies: MoviePage;
    id: number = Number(this.route.snapshot.params['id']);
  
    constructor(private movieService: MovieService, private route:ActivatedRoute){
     }
     
     ngOnInit(){
        this.getMovieList();
     }

     private getMovieList(){
         this.movieService.getRecommended(this.id).subscribe(data =>  this.movies = data);
     }
     
     public changePage(pageNumber: number){
        let result= this.movieService.getPageRecommended(pageNumber, this.id);
        result.subscribe(data => this.movies = data);
     }
    
}