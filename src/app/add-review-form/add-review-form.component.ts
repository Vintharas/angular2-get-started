

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

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



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
