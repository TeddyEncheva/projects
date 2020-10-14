import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReviewService } from '../shared/reviews.service';
import { Review } from '../shared/models/review';
import { ActivatedRoute } from '@angular/router';
import { ReviewPage } from '../shared/models/reviewPage';

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
