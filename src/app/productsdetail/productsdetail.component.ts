import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit {
  
  books$: any = [];
  constructor(private newService : BooksService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newService.getDetailPackage(this.route.snapshot.params._id).subscribe(res => {
      this.books$ = res;
    });
  this.jquery_code()
  }

  jquery_code(){


  }

  
}
