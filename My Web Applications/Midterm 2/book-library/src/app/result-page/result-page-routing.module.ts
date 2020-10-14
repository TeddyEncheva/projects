import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultPageComponent } from './result-page.component';
import { APP_ROUTES } from '../constants/app.routes';
import { VolumeDetailsComponent } from '../volume-details/volume-details.component';
import { MyVolumesComponent } from './components/my-volumes/my-volumes.component';
import { MyVolumesGuard } from './components/my-volumes/guard/my-volumes-guard.service';

const routes: Routes = [
  { path: '', component: ResultPageComponent },
  {
    path: `${APP_ROUTES.volumes.children.details}/:id`,
    component: VolumeDetailsComponent,
  },
  {
    path: `${APP_ROUTES.volumes.children.myVolumes}`,
    component: MyVolumesComponent,
    canActivate: [MyVolumesGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultPageRoutingModule {}
