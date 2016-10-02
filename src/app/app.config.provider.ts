import { OpaqueToken } from '@angular/core';

export let ARTICLES_API_URL : OpaqueToken = new OpaqueToken('articles.api');

export let ArticlesApiProvider = {
    provide: ARTICLES_API_URL,
    useValue: 'http://localhost:3000/articles'
};