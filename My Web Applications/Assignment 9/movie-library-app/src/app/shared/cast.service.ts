import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Credit } from './models/creadit';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  constructor(private http: HttpClient) {
  }

  private api_key:string = '?api_key=519e9b151c1dc701bf50e6824fbe3409';
 
  private APIUrl = 'https://api.themoviedb.org/3/movie';

  
    getCredits(id:number): Observable<Credit>{
      return this.http.get<Credit>(`${this.APIUrl}/${id}/credits${this.api_key}`);
  }
}
