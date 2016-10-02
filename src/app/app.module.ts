import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopWelcomeComponent } from './shop-welcome/shop-welcome.component';
import { ShopFooterComponent } from './shop-footer/shop-footer.component';
import { ShopArticlesComponent } from './shop-articles/shop-articles.component';
import { GoldCoinsPipe } from './gold-coins.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShopWelcomeComponent,
    ShopFooterComponent,
    ShopArticlesComponent,
    GoldCoinsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
