

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { OpaqueToken } from '@angular/core';

export let ARTICLES_API_URL : OpaqueToken = new OpaqueToken('articles.api');

export let ArticlesApiProvider = {
    provide: ARTICLES_API_URL,
    useValue: 'http://localhost:3000/articles'
};


// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
