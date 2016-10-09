

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

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
import { UserReviewComponent } from './user-review/user-review.component';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ShopWelcomeComponent,
    ShopFooterComponent,
    ShopArticlesComponent,
    GoldCoinsPipe,
    ShopArticleComponent,
    ShoppingCartComponent,
    ShopArticleDetailedComponent,
    UserReviewComponent,
    AddReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    ArticlesService,
    ArticlesApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
