import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from '../models/creadit.model';
import { API_URL, API_KEY } from 'src/app/constants/api';

@Injectable({
  providedIn: 'root',
})
export class CastService {
  constructor(private http: HttpClient) {}

  getCredits(id: number): Observable<Credit> {
    return this.http.get<Credit>(`${API_URL}/${id}/credits${API_KEY}`);
  }
}
