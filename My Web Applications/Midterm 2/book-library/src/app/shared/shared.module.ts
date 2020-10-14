import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommaListPipe } from './pipes/comma-list.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { StripTagPipe } from './pipes/strip-tag.pipe';

@NgModule({
  declarations: [CommaListPipe, TruncatePipe, StripTagPipe],
  imports: [CommonModule],
  exports: [CommaListPipe, TruncatePipe, StripTagPipe],
})
export class SharedModule {}
