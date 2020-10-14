import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'review-unit',
  templateUrl: './review-unit.component.html',
  styleUrls: ['./review-unit.component.css']
})
export class ReviewUnitComponent implements OnInit {
  @Input() review: Review;
  constructor() { }

  processLength(content:string): string{
    const maxLength = 1000;
    const dots = "...";
    if(content.length>maxLength){
      content = content.substring(0, maxLength) + dots;
    }
    return content;
  }
  
  ngOnInit(): void {
  }

}
