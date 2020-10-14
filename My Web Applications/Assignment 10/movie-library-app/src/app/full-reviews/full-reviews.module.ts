import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewUnitComponent } from './components/review-unit/review-unit.component';
import { ReviewService } from './services/reviews.service';
import { SharedModule } from '../shared/shared.module';
import { FullReviewsComponent } from './full-reviews.component';
import { ReadMoreComponent } from './components/review-unit/read-more/read-more.component';



@NgModule({
  declarations: [
    FullReviewsComponent,
    ReviewUnitComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    ReviewUnitComponent
  ],
  providers: [ReviewService]
})
export class FullReviewsModule { }
