

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shop-footer',
    template: `
      <footer>
        <section>
            <p>Built with love and Angular 2</p>
            <p>Mordor Ltd</p>
        </section>
      </footer> 
    `,
  styleUrls: ['./shop-footer.component.scss']
})
export class ShopFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}


// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
