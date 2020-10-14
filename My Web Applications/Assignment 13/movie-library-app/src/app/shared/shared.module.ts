import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieImageComponent } from './components/movie-image/movie-image.component';

@NgModule({
  declarations: [MovieImageComponent],
  imports: [CommonModule],
  exports: [MovieImageComponent],
})
export class SharedModule {}
