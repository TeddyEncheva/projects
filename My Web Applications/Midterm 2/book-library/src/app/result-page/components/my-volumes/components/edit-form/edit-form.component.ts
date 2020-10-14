import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Volume } from 'src/app/result-page/models/volume.model';
import { MyVolumesService } from '../../services/my-volumes.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  newVolume: Volume;
  myVolumeForm: FormGroup;
  activateEdit: boolean;
  isNew: boolean;

  @Input() myVolume: Volume;
  @Input() localId: string;
  @Input() myVolumes: Array<Volume>;
  @Output() myVolumesUpdated = new EventEmitter<Array<Volume>>();

  constructor(
    private formBuilder: FormBuilder,
    private myVolumesService: MyVolumesService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    if (this.myVolume !== undefined) {
      this.createForm();
      this.addAuthorsList();
    }
  }

  createForm(): void {
    this.myVolumeForm = this.formBuilder.group({
      volumeInfo: this.formBuilder.group({
        title: [this.myVolume.volumeInfo?.title, Validators.required],
        authors: this.formBuilder.array([this.formBuilder.control('')]),
        publisher: [this.myVolume.volumeInfo?.publisher],
        publishedDate: [this.myVolume.volumeInfo?.publishedDate],
        pageCount: [
          this.myVolume.volumeInfo?.pageCount,
          Validators.pattern('^[0-9]*$'),
        ],
        imageLinks: this.formBuilder.group({
          thumbnail: [this.myVolume.volumeInfo?.imageLinks?.thumbnail],
        }),
      }),
    });
  }

  addAuthorsList(): void {
    (this.myVolumeForm.get('volumeInfo.authors') as FormArray).clear();

    this.myVolume.volumeInfo?.authors?.forEach((author) => {
      const control = this.formBuilder.control(author);
      (this.myVolumeForm.get('volumeInfo.authors') as FormArray).push(control);
    });
  }

  getControls(): FormArray {
    return this.myVolumeForm.get('volumeInfo.authors') as FormArray;
  }

  addAuthor(): void {
    (<FormArray>this.myVolumeForm.get('volumeInfo.authors')).push(
      this.addAuthorFormControl()
    );
  }

  addAuthorFormControl(): FormControl {
    return this.formBuilder.control('');
  }

  onSubmit(): void {
    if (this.myVolumeForm.valid) {
      //set editated state of volume and preserve id
      if (this.myVolume.id !== undefined) {
        let id: string = this.myVolume.id;
        this.myVolume = this.myVolumeForm.value;
        this.myVolume.id = id;
        this.isNew = false;
      } else {
        this.createNew();
        this.isNew = true;
      }

      // send edited state of volume
      this.myVolumesService.add(this.localId, this.myVolume);
      this.newVolume = this.myVolume;

      this.replaceVolume();

      // emit updated list
      this.myVolumesUpdated.emit(this.myVolumes);
      this.formService.setActivateFormState(false);
    }
  }

  createNew(): void {
    let generatedId: number = Date.now();

    this.myVolume = this.myVolumeForm.value;
    this.myVolume.id = String(generatedId);
  }

  replaceVolume(): void {
    if (this.isNew === false) {
      this.myVolumes.forEach((volume) => {
        if (volume.id === this.newVolume.id) {
          this.myVolumes.splice(
            this.myVolumes.indexOf(volume),
            1,
            this.newVolume
          );
        }
      });
    } else {
      this.myVolumes.push(this.newVolume);
    }
  }

  close(): void {
    this.formService.setActivateFormState(false);
  }
}
