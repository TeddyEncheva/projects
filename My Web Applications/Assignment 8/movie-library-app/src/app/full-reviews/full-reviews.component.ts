import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../shared/reviews.service';
import { Review } from '../models/review';

@Component({
  selector: 'app-full-reviews',
  templateUrl: './full-reviews.component.html',
  styleUrls: ['./full-reviews.component.css']
})
export class FullReviewsComponent implements OnInit {
  reviews: Array<Review>;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviews = this.reviewService.getAll();
  }

}
