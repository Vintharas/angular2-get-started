

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';
import { ShoppingCart } from '../model/shopping-cart';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'shop-articles',
  templateUrl: './shop-articles.component.html',
  styleUrls: ['./shop-articles.component.scss']
})
export class ShopArticlesComponent implements OnInit {
  articles: Article[];
  cart: ShoppingCart = new ShoppingCart();
  error: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService
      .getAllAsync()
      .subscribe(
        /* onNext*/ articles => this.articles = articles,
        /* onError */ error => this.error = error);
  }

  addArticleToCart(article:Article){
    console.log(`Added article to cart! ${article.name}`);
    this.cart.addArticle(article);
  }
}



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
