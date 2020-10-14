import { Component, OnInit } from '@angular/core';
import { MoviePage } from '../../../movie-list/models/moviepage.model';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from '../../services/movie-details.service';

@Component({
  selector: 'app-movie-recommendations',
  templateUrl: './movie-recommendations.component.html',
  styleUrls: ['./movie-recomendations.component.css'],
})
export class MovieRecommendationsComponent implements OnInit {
  movies: MoviePage;
  id: number = Number(this.route.snapshot.params['id']);

  constructor(
    private detailsService: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  private getMovieList(): void {
    this.detailsService
      .getRecommended(this.id)
      .subscribe((data) => (this.movies = data));
  }

  public changePage(pageNumber: number): void {
    let result = this.detailsService.getPageRecommended(pageNumber, this.id);
    result.subscribe((data) => (this.movies = data));
  }
}
