import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Volume } from 'src/app/result-page/models/volume.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  activateForm: Subject<boolean> = new Subject<boolean>();
  volumeToEdit: Subject<Volume> = new Subject<Volume>();

  constructor() { }

  getActivateFormState(): Observable<boolean>{
    return this.activateForm.asObservable();
  }

  setActivateFormState(state:boolean): void{
    this.activateForm.next(state);
  }

  getVolumeToEdit(): Observable<Volume>{
    return this.volumeToEdit.asObservable();
  }

  setVolumeToEdit(volume: Volume): void{
    this.volumeToEdit.next(volume);
  }
}
