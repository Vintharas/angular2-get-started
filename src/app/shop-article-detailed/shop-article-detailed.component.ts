

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../model/article';
import { Review } from '../model/review';

@Component({
  selector: 'app-shop-article-detailed',
  templateUrl: './shop-article-detailed.component.html',
  styleUrls: ['./shop-article-detailed.component.scss']
})
export class ShopArticleDetailedComponent implements OnInit {
  article: Article;
  newReview: Review;

  constructor(private route: ActivatedRoute, private articlesService:ArticlesService, private router:Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        let id = Number.parseInt(params['id']);
        this.articlesService
          .getAsync(id)
          .subscribe(article => this.article = article);
      })
  }

  goBack(){
    this.router.navigate(["/"]);
    //history.back();
  }

  addReview(){
    this.newReview = new Review("Jaime");
  }

  addReviewToArticle(){
    this.article.reviews.push(this.newReview);
    this.newReview = null;
    // save via http
  }
}




// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
