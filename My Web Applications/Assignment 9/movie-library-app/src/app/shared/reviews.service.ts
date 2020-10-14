
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { ReviewPage } from './models/reviewPage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ReviewService{
    constructor(private http: HttpClient) {
    }

    private api_key:string = '?api_key=519e9b151c1dc701bf50e6824fbe3409';
    private reviews = '/reviews';
    private APIUrl = 'https://api.themoviedb.org/3/movie';

    getReviews(id:number): Observable<ReviewPage>{
        return this.http.get<ReviewPage>(`${this.APIUrl}/${id}${this.reviews}${this.api_key}`);
    } 
}

