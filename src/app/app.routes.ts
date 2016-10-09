

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

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



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
