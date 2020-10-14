import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviePage } from '../../movie-list/models/moviepage.model';
import { MovieOverview } from '../components/movie-overview/models/movieOverview.model';
import {
  API_URL,
  API_KEY,
  PAGE_SELECTOR,
  RECOMMENDATIONS,
} from '../../constants/api';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  getRecommended(id: number): Observable<MoviePage> {
    return this.http.get<MoviePage>(
      `${API_URL}/${id}${RECOMMENDATIONS}${API_KEY}`
    );
  }

  getPageRecommended(pageNumber: number, id: number): Observable<MoviePage> {
    return this.http.get<MoviePage>(
      `${API_URL}/${id}${RECOMMENDATIONS}${API_KEY}${PAGE_SELECTOR}${pageNumber}`
    );
  }

  getMovieOverview(id: number): Observable<MovieOverview> {
    return this.http.get<MovieOverview>(`${API_URL}/${id}${API_KEY}`);
  }
}
