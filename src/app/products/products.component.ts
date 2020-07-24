import { NgxPaginationModule } from 'ngx-pagination';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { CategoryService } from '../services/category.service';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  first: any = '100/200';
  second: any = '200/300';
  third: any = '300/400';
  fourth: any = '400/500';
  fifth: any = '500/10000';
  variant1: any = 'asc';
  variant: any = 'desc';
  book_sec = false;
  books$: any = [];
  totalBooks: number;
  pages: number = 1;

  constructor(
    private CatService : CategoryService,
    private router: Router,
    private newService: BooksService,
    private route: ActivatedRoute,
    private filter: FilterService
  ) {}

  ngOnInit(): void {
    this.CatService.getCategoryById(this.route.snapshot.params._id).subscribe(res => {
      this.books$ = res;
    });
    if (this.router.url == '/books/sortBy100/200') {
      this.filters(this.first);
    }
    if (this.router.url == '/books/sortBy200/300') {
      this.filters(this.second);
    }
    if (this.router.url == '/books/sortBy300/400') {
      this.filters(this.third);
    }
    if (this.router.url == '/books/sortBy400/500') {
      this.filters(this.fourth);
    }
    if (this.router.url == '/books/sortBy500') {
      this.filters(this.fifth);
    }
    if (this.router.url == '/books') {
      this.book();
    }
    if (this.router.url == '/books/sortByasc') {
      this.filtersSort(this.variant1);
    }
    if (this.router.url == '/books/sortBydesc') {
      this.filtersSort(this.variant);
    }
    this.jquery_code();
  }

  jquery_code() {
    $(document).ready(function () {
      
    });
  }

  /* Set the width of the side navigation to 250px */
  public openNav() {
  
      $("#mySidenav").css("width","400px")
     
        
    
  
    
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

   on() {
    document.getElementById("overlay").style.display = "block";
  }
  
   off() {
    document.getElementById("overlay").style.display = "none";
  } 

  book() {
    this.newService.getBooks().subscribe((data) => {
      this.books$ = data;
      this.totalBooks = data.totalBooks.length;
      this.pages = 1;
    });
  }

  filters(modal: String) {
    this.filter.priceDefine(modal).subscribe((res) => {
      this.books$ = res;
    });
  }
  filtersSort(variant: String) {
    this.filter.sortBy(variant).subscribe((res) => {
      this.books$ = res;
    });
  }
  onPageChange(page: number = 1) {
    this.pages = page;
    window.scrollTo(0, 520);
  }

  productHome(_id) {
    window.open('details/' + _id);
  }

  public price() {
    this.router.navigate(['books/sortBy100/200']);
  }
  public price1() {
    this.router.navigate(['books/sortBy200/300']);
  }
  public price2() {
    this.router.navigate(['books/sortBy300/400']);
  }
  public price3() {
    this.router.navigate(['books/sortBy400/500']);
  }
  public price4() {
    this.router.navigate(['books/sortBy500']);
  }
  public lowTohigh() {
    this.router.navigate(['books/sortByasc']);
  }
  public highTolow() {
    this.router.navigate(['books/sortBydesc']);
  }

  public _opened = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
}
