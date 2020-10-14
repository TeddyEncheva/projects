import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPageComponent } from './result-page.component';
import { VolumeListComponent } from './components/volume-list/volume-list.component';
import { VolumeThumbnailComponent } from './components/volume-list/components/volume-thumbnail/volume-thumbnail.component';
import { ResultPageRoutingModule } from './result-page-routing.module';
import { SearchPageModule } from '../search-page/search-page.module';
import { VolumeDetailsModule } from '../volume-details/volume-details.module';
import { SharedModule } from '../shared/shared.module';
import { MyVolumesComponent } from './components/my-volumes/my-volumes.component';
import { AddButtonComponent } from './components/my-volumes/components/add-button/add-button.component';
import { DeleteButtonComponent } from './components/my-volumes/components/delete-button/delete-button.component';
import { EditButtonComponent } from './components/my-volumes/components/edit-button/edit-button.component';
import { EditFormComponent } from './components/my-volumes/components/edit-form/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResultPageComponent,
    VolumeListComponent,
    VolumeThumbnailComponent,
    MyVolumesComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    ResultPageRoutingModule,
    SearchPageModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class ResultPageModule {}
