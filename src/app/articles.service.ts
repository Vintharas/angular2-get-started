

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/rx';

import { ARTICLES_API_URL } from './app.config.provider';
import { Article } from './model/article';

@Injectable()
export class ArticlesService {

  constructor(private http:Http, @Inject(ARTICLES_API_URL)private ARTICLES_API_URL) { }

  getAllAsync(): Observable<Article[]> {
    return this.http
      .get(this.ARTICLES_API_URL)
      .delay(2000) // so you can see it more clearly
      .map( (r:Response) => {
        // to simulate an error
        // throw new Error("Omg What has happened!!");
        return r.json();
      });
  }

  getAsync(id:number): Observable<Article> {
    return this.http
      .get(this.ARTICLES_API_URL + `/${id}`)
      .map( (r:Response) => {
        return r.json();
      });
  }

}



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
