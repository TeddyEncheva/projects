import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MY_VOLUMES_REQUESTS } from 'src/app/constants/api';
import { take } from 'rxjs/internal/operators';
import { EventEmitter } from '@angular/core';
import { Volume } from 'src/app/result-page/models/volume.model';

@Injectable({
  providedIn: 'root',
})
export class MyVolumesService {
  private key: string = '?key=AIzaSyB_SfeLENmQKY3stWWPQNVE5F64MBMXWqU';

  @Output() added: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  getAll(localId: string): Observable<Array<Volume>> {
    return this.http.get<Array<Volume>>(
      `${MY_VOLUMES_REQUESTS.all.myVolumes}/${localId}.json${this.key}`
    );
  }

  add(localId: string, volume: Volume): void {
    this.http
      .put(
        `${MY_VOLUMES_REQUESTS.all.myVolumes}/${localId}/${volume.id}.json${this.key}`,
        JSON.stringify(volume)
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.added.emit(true);
        },
        (error) => {
          this.added.emit(false);
        }
      );
  }

  delete(localId: string, myVolumeId: string): void {
    this.http
      .delete(
        `${MY_VOLUMES_REQUESTS.all.myVolumes}/${localId}/${myVolumeId}.json${this.key}`
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.deleted.emit(true);
        },
        (error) => {
          this.deleted.emit(false);
        }
      );
  }
}
