import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'shop-articles',
  templateUrl: './shop-articles.component.html',
  styleUrls: ['./shop-articles.component.scss']
})
export class ShopArticlesComponent implements OnInit {
  articles: Article[];
  error: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService
      .getAllAsync()
      .subscribe(
        /* onNext*/ articles => this.articles = articles,
        /* onError */ error => this.error = error);
  }
}
