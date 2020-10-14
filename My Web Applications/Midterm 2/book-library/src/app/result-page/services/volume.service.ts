import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REQUESTS } from 'src/app/constants/api';
import { VolumeList } from '../models/searchResult.model';
import { Volume } from '../models/volume.model';

@Injectable({
  providedIn: 'root',
})
export class VolumeService {
  constructor(private http: HttpClient) {}

  getAll(stringQuery: string): Observable<VolumeList> {
    return this.http.get<VolumeList>(
      `${API_REQUESTS.search.volumes}?q=${stringQuery}`
    );
  }

  getById(id: string): Observable<Volume> {
    return this.http.get<Volume>(
      `${API_REQUESTS.search.volumes}/${id}`
    );
  }
}
