import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /* JavaScript here */
  constructor() { }

  ngOnInit(): void {
    this.jquery_code();
  }
  jquery_code() {
    /* Jquery here */
  }

}
