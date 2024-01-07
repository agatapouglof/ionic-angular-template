import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  buy_clicked: boolean = false;
  order_placed: boolean = false;
  content_loaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Fake timeout since we do not load any data
    setTimeout(() => {
      this.content_loaded = true;
    }, 500);
  }

  ionViewWillLeave() {
    this.content_loaded = false;
  }

  buy() {
    this.buy_clicked = true;

    setTimeout(async () => {
      this.order_placed = true;
    }, 1000);
  }

}
