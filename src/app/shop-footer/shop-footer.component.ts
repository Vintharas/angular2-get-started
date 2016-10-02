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
    `
})
export class ShopFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}