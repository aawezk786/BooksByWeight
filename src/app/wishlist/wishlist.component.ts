import { WishlistService } from './../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
book$ : any = [];
  constructor(private wish: WishlistService) { }

  ngOnInit(): void {
  
    this.wish.getwish().subscribe(data =>{
      this.book$ = data;
    })
  }



}
