import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-latestcollection',
  templateUrl: './latestcollection.component.html',
  styleUrls: ['./latestcollection.component.css']
})
export class LatestcollectionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:false,
autoplayTimeout:3000,
autoplayHoverPause:true,
    navSpeed: 700,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  books$ :any = [];
  constructor(
    private toastr: ToastrService,
     private newService : BooksService,
     private wish : WishlistService,
     private router : Router) { }

  ngOnInit(): void {
    this.newService.getlatestBooks()
    .subscribe(data =>
    
       this.books$ = data
    
      );
this.jquery_code();
  }



  jquery_code(){


    $(document).ready(function(){
     
  });


  }
  productHome(_id) {
    window.open( 'details/'+_id );
  }
  addWish(_id) {
    if(localStorage.getItem('User')){
      this.wish.postProduct( _id).subscribe(res =>{
        this.toastr.success('Product Successfully Added', 'BooksByWeight', { timeOut: 3000 });
      },err=>{
        this.toastr.warning('Product already Added', 'BooksByWeight', { timeOut: 3000 });
      });
    }else{
      this.router.navigate(['/login']);
    }
   
  }
}
