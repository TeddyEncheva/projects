import { Component, OnInit, Input } from '@angular/core';
import { Volume } from 'src/app/result-page/models/volume.model';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants/app.routes';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';
import { MyVolumesService } from '../../../my-volumes/services/my-volumes.service';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-volume-thumbnail',
  templateUrl: './volume-thumbnail.component.html',
  styleUrls: ['./volume-thumbnail.component.scss'],
})
export class VolumeThumbnailComponent implements OnInit {
  @Input() volume: Volume;
  @Input() myVolumeIds: Array<string>;
  localId: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getLocalId();
  }

  getLocalId(): void {
    this.authService.getLocalId().pipe(take(1)).subscribe((response) => {
      this.localId = response;
    });
  }

  redirectToDetails(): void {
    this.router.navigate([
      `${APP_ROUTES.volumes.path}/${APP_ROUTES.volumes.children.details}`,
      this.volume.id,
    ]);
  }
}
