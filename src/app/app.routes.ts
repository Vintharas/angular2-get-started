import { Routes, RouterModule } from '@angular/router';
import { ShopArticlesComponent } from './shop-articles/shop-articles.component';
import { ShopArticleDetailedComponent } from './shop-article-detailed/shop-article-detailed.component'

const routes: Routes = [
   {
    path: 'shop',
    component: ShopArticlesComponent,
   },
   {
    path: 'shop/:id',
    component: ShopArticleDetailedComponent,
   },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full'
  },
];

export let routing = RouterModule.forRoot(routes);
