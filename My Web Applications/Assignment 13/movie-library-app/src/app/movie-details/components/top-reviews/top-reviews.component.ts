import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/full-reviews/services/reviews.service';
import { ReviewPage } from 'src/app/full-reviews/models/reviewPage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-reviews',
  templateUrl: './top-reviews.component.html',
  styleUrls: ['./top-reviews.component.css'],
})
export class TopReviewsComponent implements OnInit {
  reviewPage: ReviewPage;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reviewService
      .getReviews(Number(this.route.snapshot.params['id']))
      .subscribe((data) => (this.reviewPage = data));
  }
}
