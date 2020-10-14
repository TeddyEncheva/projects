import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../shared/models/review';
import { ReviewService } from 'src/app/shared/reviews.service';
import { ReviewPage } from 'src/app/shared/models/reviewPage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-reviews',
  templateUrl: './top-reviews.component.html',
  styleUrls: ['./top-reviews.component.css']
})
export class TopReviewsComponent implements OnInit {
  reviewPage: ReviewPage;

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.reviewService.getReviews(Number(this.route.snapshot.params['id']))
   .subscribe(data => this.reviewPage = data);
  }

}
