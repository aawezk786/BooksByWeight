import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from './../services/books.service';
declare var $:any
@Component({
  selector: 'app-popularcollection',
  templateUrl: './popularcollection.component.html',
  styleUrls: ['./popularcollection.component.css']
})
export class PopularcollectionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:false,
autoplayTimeout:2000,
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
  constructor(private newService : BooksService) { }

  ngOnInit(): void {
    this.newService.getBooks()
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

}
