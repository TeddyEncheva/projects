import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { MoviePage } from '../models/moviepage.model';
import { API_URL, API_KEY, POPULAR_URL, PAGE_SELECTOR } from '../../constants/api';



@Injectable({
    providedIn: 'root'
})

export class MovieService{
    currentPage: number;

    constructor(private http: HttpClient) { }

    getMovies(): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${API_URL}${POPULAR_URL}${API_KEY}`);
    } 

    getByPage(pageNumber:number ): Observable<MoviePage>{
        return this.http.get<MoviePage>(`${API_URL}${POPULAR_URL}${API_KEY}${PAGE_SELECTOR}${pageNumber}`);
    }
}
