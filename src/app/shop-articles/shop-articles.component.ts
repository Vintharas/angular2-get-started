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

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articles = this.articlesService.getAll();
  }
}
