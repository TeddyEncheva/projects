import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/shared/reviews.service';

@Component({
  selector: 'top-reviews',
  templateUrl: './top-reviews.component.html',
  styleUrls: ['./top-reviews.component.css']
})
export class TopReviewsComponent implements OnInit {
  reviews: Array<Review>;
  // @Input() id:number;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviews = this.reviewService.getAll();
  }

}
