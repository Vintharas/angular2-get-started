

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Article } from './article';

export class ShoppingCart {
    lines: ShoppingCartLine[] = [];
    get total(): number{
        return this.lines
            .map(l => l.quantity * l.article.price)
            .reduce((a, l) => a+l, 0)
    }

    addArticle(article:Article){
        let articleInList = this.lines.find(l => l.article.id == article.id)
        if (articleInList) articleInList.quantity++;
        else this.lines.push(new ShoppingCartLine(article))
    }
}

export class ShoppingCartLine{
    constructor(public article:Article, public quantity:number=1){}
}


// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
