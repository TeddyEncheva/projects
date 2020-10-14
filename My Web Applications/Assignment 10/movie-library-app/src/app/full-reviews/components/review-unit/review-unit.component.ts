import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../full-reviews/models/review';

@Component({
  selector: 'app-review-unit',
  templateUrl: './review-unit.component.html',
  styleUrls: ['./review-unit.component.css']
})
export class ReviewUnitComponent implements OnInit {
  @Input() review: Review;
  constructor() { }
  
  ngOnInit(): void {
  }

}
