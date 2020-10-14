import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyVolumesService } from '../../services/my-volumes.service';
import { take } from 'rxjs/internal/operators';
import { Volume } from 'src/app/result-page/models/volume.model';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {
  @Input() localId: string;
  @Input() myVolumeId: string;
  @Input() myVolumes: Array<Volume>;

  @Output() myVolumesUpdated = new EventEmitter<Array<Volume>>();

  constructor(private myVolumeService: MyVolumesService) {}

  ngOnInit(): void {}

  pressed(): void {
    event.stopPropagation();
    this.myVolumeService.delete(this.localId, this.myVolumeId);

    // to update collection if deletion was successful
    this.updateList();
  }

  updateList(): void {
    this.myVolumeService.deleted.pipe(take(1)).subscribe((response) => {
      this.myVolumes.forEach((volume) => {
        if (volume.id === this.myVolumeId) {
          this.myVolumes.splice(this.myVolumes.indexOf(volume), 1);
          this.myVolumesUpdated.emit(this.myVolumes);
        }
      });
    });
  }
}
