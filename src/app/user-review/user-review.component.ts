

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

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



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
