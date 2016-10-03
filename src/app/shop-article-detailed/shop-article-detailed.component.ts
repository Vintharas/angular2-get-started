import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../model/article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-shop-article-detailed',
  templateUrl: './shop-article-detailed.component.html',
  styleUrls: ['./shop-article-detailed.component.scss']
})
export class ShopArticleDetailedComponent implements OnInit {
  article: Article;

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
}
