import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeDetailsComponent } from './volume-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VolumeDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VolumeDetailsComponent]
})
export class VolumeDetailsModule { }
