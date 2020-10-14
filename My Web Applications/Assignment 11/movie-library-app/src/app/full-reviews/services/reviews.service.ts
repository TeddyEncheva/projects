import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewPage } from '../models/reviewPage';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from 'src/app/constants/api';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  private reviews = '/reviews';

  getReviews(id: number): Observable<ReviewPage> {
    return this.http.get<ReviewPage>(
      `${API_URL}/${id}${this.reviews}${API_KEY}`
    );
  }
}
