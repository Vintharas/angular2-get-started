

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'shop-article',
  templateUrl: './shop-article.component.html',
  styleUrls: ['./shop-article.component.scss'],
  //inputs: ['article']
})
export class ShopArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() onArticleBought: EventEmitter<Article> = new EventEmitter<Article>();

  constructor() { }
  ngOnInit() {
  }
  
  buyArticle(){
    this.onArticleBought.emit(this.article);
  }
  
}



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
