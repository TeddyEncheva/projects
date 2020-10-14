
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { MoviePage } from './models/moviepage';
import { MovieOverview } from './models/movieOverview';



@Injectable({
    providedIn: 'root'
})
export class MovieService{
    

    constructor(private http: HttpClient) {
    }

    private api_key:string = '?api_key=519e9b151c1dc701bf50e6824fbe3409';
    private page_selector: string = '&page=';

    private APIUrl = 'https://api.themoviedb.org/3/movie';

    getMovies(): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${this.APIUrl}/popular${this.api_key}`);
    } 

    getPage(pageNumber:number ): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${this.APIUrl}/popular${this.api_key}${this.page_selector}${pageNumber}`);
    }


    getRecommended(id:number): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${this.APIUrl}/${id}/recommendations${this.api_key}`);
    }

    getPageRecommended(pageNumber:number, id: number ): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${this.APIUrl}/${id}/recommendations${this.api_key}${this.page_selector}${pageNumber}`);
    }

    getMovieOverview(id:number): Observable<MovieOverview>{
        return this.http.get<MovieOverview>(`${this.APIUrl}/${id}${this.api_key}`);
    }
}
