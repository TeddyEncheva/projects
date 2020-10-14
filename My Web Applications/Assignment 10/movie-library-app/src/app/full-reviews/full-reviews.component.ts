import { Component, OnInit } from '@angular/core';
import { ReviewService } from './services/reviews.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewPage } from './models/reviewPage';

@Component({
  templateUrl: './full-reviews.component.html',
  styleUrls: ['./full-reviews.component.css']
})
export class FullReviewsComponent implements OnInit {
  reviewPage: ReviewPage;

  constructor(private reviewService: ReviewService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewService.getReviews(Number(this.route.snapshot.params['id']))
    .subscribe(data=> this.reviewPage = data);
  }
}
