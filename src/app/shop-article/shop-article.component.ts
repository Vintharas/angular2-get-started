import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'shop-article',
  templateUrl: './shop-article.component.html',
  styleUrls: ['./shop-article.component.scss'],
  //inputs: ['article']
})
export class ShopArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }
  
  ngOnInit() {
  }
}
