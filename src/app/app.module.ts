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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { routing } from './app.routes';
import { ShopArticleDetailedComponent } from './shop-article-detailed/shop-article-detailed.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ShopWelcomeComponent,
    ShopFooterComponent,
    ShopArticlesComponent,
    GoldCoinsPipe,
    ShopArticleComponent,
    ShoppingCartComponent,
    ShopArticleDetailedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ArticlesService,
    ArticlesApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
