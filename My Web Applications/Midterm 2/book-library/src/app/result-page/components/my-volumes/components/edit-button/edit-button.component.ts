import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Volume } from 'src/app/result-page/models/volume.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss'],
})
export class EditButtonComponent implements OnInit {
  newVolume: Volume = new Volume();
  @Input() myVolumeId: string;
  @Input() localId: string;
  @Input() volume: Volume;
  @Input() createNew: boolean;
  @Output() volumeForEdit: EventEmitter<Volume> = new EventEmitter<Volume>();

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  pressed(): void {
    event.stopPropagation();

    if (this.createNew === true) {
      this.volumeForEdit.emit(this.newVolume);
      this.formService.setActivateFormState(true);
    } else {
      this.volumeForEdit.emit(this.volume);
      this.formService.setActivateFormState(true);
    }
  }
}
