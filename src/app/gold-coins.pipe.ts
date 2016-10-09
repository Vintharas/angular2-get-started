

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goldCoins'
})
export class GoldCoinsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} gold coins`;
  }

}



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
