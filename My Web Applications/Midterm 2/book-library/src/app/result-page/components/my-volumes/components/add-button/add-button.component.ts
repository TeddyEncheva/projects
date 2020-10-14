import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MyVolumesService } from '../../services/my-volumes.service';
import { Volume } from 'src/app/result-page/models/volume.model';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Input() volume: Volume;
  @Input() myVolumeIds: Array<string>;
  @Input() localId: string;
  @Output() updatedVolumeIds = new EventEmitter<Array<string>>();

  volumeCopy: Volume = new Volume();
  generatedId: number;

  constructor(
    private myVolumesService: MyVolumesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  pressed(): void {
    event.stopPropagation();
    if (this.localId === null) {
      this.router.navigate(['auth/login']);
    } else this.addVolume();
  }

  addVolume(): void {
    this.generateId();
    this.cloneVolume();

    this.volumeCopy.id = `${this.volume.id}${this.generatedId}`;
    this.myVolumesService.add(this.localId, this.volumeCopy);
    this.myVolumeIds.push(this.volumeCopy.id);

    // update the collection
    const volumeList: Array<string> = this.myVolumeIds;
    this.updatedVolumeIds.emit(volumeList);
  }

  generateId(): void {
    let generate: number = 1;
    let element: string;

    //to find first occurance of last added element containing original id
    for (let index = this.myVolumeIds.length - 1; index >= 0; index--) {
      if (this.myVolumeIds[index].includes(this.volume.id)) {
        element = this.myVolumeIds[index];
        break;
      }
    }

    //for once there already has been one such volume added
    if (element !== undefined) {
      let numberId: number = Number(
        element.substring(this.volume.id.length, element.length)
      );
      generate = numberId + 1;
    }

    this.updatedVolumeIds.emit(this.myVolumeIds);
    this.generatedId = generate;
  }

  cloneVolume(): void {
    for (const key in this.volume) {
      this.volumeCopy[key] = this.volume[key];
    }
  }
}
