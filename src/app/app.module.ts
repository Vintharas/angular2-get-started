import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopWelcomeComponent } from './shop-welcome/shop-welcome.component';
import { ShopFooterComponent } from './shop-footer/shop-footer.component';
import { ShopArticlesComponent } from './shop-articles/shop-articles.component';
import { GoldCoinsPipe } from './gold-coins.pipe';
import { ArticlesService } from './articles.service';
import { ShopArticleComponent } from './shop-article/shop-article.component';
import { ArticlesApiProvider } from './app.config.provider';


@NgModule({
  declarations: [
    AppComponent,
    ShopWelcomeComponent,
    ShopFooterComponent,
    ShopArticlesComponent,
    GoldCoinsPipe,
    ShopArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ArticlesService,
    ArticlesApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
