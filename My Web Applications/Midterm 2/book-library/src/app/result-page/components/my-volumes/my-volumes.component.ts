import { Component, OnInit } from '@angular/core';
import { MyVolumesService } from './services/my-volumes.service';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';
import { take } from 'rxjs/internal/operators';
import { Volume } from '../../models/volume.model';
import { FormService } from './services/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-volumes',
  templateUrl: './my-volumes.component.html',
  styleUrls: ['./my-volumes.component.scss'],
})
export class MyVolumesComponent implements OnInit {
  localId: string;
  myVolumes: Array<Volume>;
  subscription: Subscription;
  formState: boolean;
  volumeUpdated: Volume;
  volumeForEdit: Volume;

  constructor(
    private myVolumesService: MyVolumesService,
    private authService: AuthenticationService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.getLocalId();
    this.getMyVolumes();
    this.observeFormState();
  }

  getLocalId(): void {
    this.authService
      .getLocalId()
      .pipe(take(1))
      .subscribe((response) => {
        this.localId = response;
      });
  }

  getMyVolumes(): void {
    if (this.localId) {
      this.myVolumesService.getAll(this.localId).subscribe((response) => {
        this.myVolumes = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.myVolumes.push(response[key]);
          }
        }
      });
    }
  }

  observeFormState(): void {
    this.subscription = this.formService
      .getActivateFormState()
      .subscribe((response) => {
        this.formState = response;
      });
  }
}
