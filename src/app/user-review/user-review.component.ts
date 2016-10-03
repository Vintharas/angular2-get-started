import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../model/review';

@Component({
  selector: 'user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss'],
})
export class UserReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() { }

  ngOnInit() {
  }

}
