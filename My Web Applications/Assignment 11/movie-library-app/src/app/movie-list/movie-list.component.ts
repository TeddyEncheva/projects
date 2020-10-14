import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MoviePage } from './models/moviepage.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: MoviePage;
  currentPage: number = 1;
  lastPage: number;
  queryParams = ['page'];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setPage();
  }

  setPage(): void {
    this.route.queryParamMap.subscribe((param) => {
      if (+param.get('page') > 1) {
        this.currentPage = +param.get('page');
      }
    });
    this.loadPage(this.currentPage);
  }

  private loadPage(page: number): void {
    this.movieService.getByPage(page).subscribe((data) => {
      this.movies = data;
      this.lastPage = data.total_pages;
    });
  }
}
