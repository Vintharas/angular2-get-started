import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Review } from '../model/review';

@Component({
  selector: 'add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFormComponent implements OnInit {
  @Input() review: Review;
  @Output() onSaveReview: EventEmitter<Review> = new EventEmitter<Review>();

  constructor() { }

  ngOnInit() {
  }

  saveReview(){
    this.onSaveReview.emit(this.review);
  }

}
