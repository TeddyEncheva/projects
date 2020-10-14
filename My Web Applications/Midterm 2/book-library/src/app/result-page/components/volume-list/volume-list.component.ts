import { Component, OnInit, Input } from '@angular/core';
import { Volume } from '../../models/volume.model';
import { MyVolumesService } from '../my-volumes/services/my-volumes.service';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-volume-list',
  templateUrl: './volume-list.component.html',
  styleUrls: ['./volume-list.component.scss'],
})
export class VolumeListComponent implements OnInit {
  @Input() resultPage: Array<Volume>;
  private subscription: Subscription;
  myVolumeIds: Array<string>;
  localId: string;

  constructor(
    private myVolumesService: MyVolumesService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getLocalId();
    this.getMyVolumeIds();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getLocalId(): void {
    this.subscription = this.authService.getLocalId().pipe(take(1)).subscribe((response) => {
      this.localId = response;
    });
  }

  getMyVolumeIds(): void {
    if (this.localId) {
      this.myVolumesService.getAll(this.localId).subscribe((response) => {
        this.myVolumeIds = [];
        for (const key in response) {
          this.myVolumeIds.push(key);
        }
      });
    } else {
      this.myVolumeIds = [];
    }
  }
}
