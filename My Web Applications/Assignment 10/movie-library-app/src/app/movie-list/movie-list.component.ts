import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MoviePage } from './models/moviepage.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls:[ './movie-list.component.css'],
})

export class MovieListComponent implements OnInit{
    movies: MoviePage;
    currentPage: number = 1;
    queryParams = ['page'];
   
    constructor(private movieService: MovieService, private route:ActivatedRoute){}
     
    ngOnInit(){
     this.setPage();
    }

    setPage(){
        
        this.route.queryParamMap.subscribe(param => {
            if(+ param.get('page')>1){
            this.currentPage = + param.get('page')
            }
        });
        this.loadPage(this.currentPage);
    }

    private loadPage(page: number){
        this.movieService.getByPage(page).subscribe(data => {
          this.movies = data;
        })
    }
}