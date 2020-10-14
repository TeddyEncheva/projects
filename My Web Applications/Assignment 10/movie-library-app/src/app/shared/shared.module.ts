import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieImageComponent } from './components/movie-image/movie-image.component';
import { MovieDetailsModule } from '../movie-details/movie-details.module';



@NgModule({
  declarations: [
    MovieImageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MovieImageComponent
  ]
})
export class SharedModule { }
