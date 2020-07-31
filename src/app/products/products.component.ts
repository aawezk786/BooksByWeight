import { NgxPaginationModule } from 'ngx-pagination';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { CategoryService } from '../services/category.service';
import { WishlistService } from '../services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  fav = true;
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
  bookId: any;

  book$: any = [];
  wid: any = [];
  size: any = {};
  Error = false;
  message: any;
  length: any;
  wid1: any = [];
  pid: any = [];
  pid1: any = [];
  jasonArray:any =[];
  constructor(
    private toastr: ToastrService,
    private CatService: CategoryService,
    private router: Router,
    private newService: BooksService,
    private route: ActivatedRoute,
    private filter: FilterService,
    private wish: WishlistService
  ) { }

  ngOnInit(): void {

// let pid2 = [this.pid1];
// let wid2 = [this.wid1];

//     let jsonArray = [];

//     jsonArray = wid2.map(i => {
//       return { 'name': i, 'matched': pid2.includes(i) };
//     });
//     console.log(jsonArray);

// const array1 = [this.pid1] 
// const array2 = [this.wid1] 
  
// // Function definiton with passing two arrays 

      
//     // Loop for array1 
//     for(let i = 0; i < array1.length; i++) { 
          
//         // Loop for array2 
//         for(let j = 0; j < array2.length; j++) { 
              
//             // Compare the element of each and 
//             // every element from both of the 
//             // arrays 
//             if(array1[i] === array2[j]) { 
              
//                 // Return if common element found 
                
//             console.log(true)
//             } 
//         } 
//     } 
      
//     // Return if no common element exist 
//     console.log(false)



    this.wish.getwish().subscribe(data => {

      this.book$ = data;
      const size = data.books


      for (var { book: books } of size) {

        this.wid = books;
        const size1 = books._id

        this.wid1.push(size1)


      }



    })
    console.log(this.wid1)


    this.jquery_code();

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

  }

  jquery_code() {

  }



  /* Set the width of the side navigation to 250px */
  public openNav() {

    $("#mySidenav").css("width", "400px")

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

      const pid = data.books

      for (var { _id: id } of pid) {



        this.pid1.push(id);


      }
      console.log(this.pid1)

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
  addWish(_id) {
    if (localStorage.getItem('User')) {


      this.wish.postProduct(_id).subscribe(res => {

        this.toastr.success('Product Successfully Added', 'BooksByWeight', { timeOut: 3000 });
    
        console.log(this.fav);



      }, err => {
        this.toastr.warning('Product already Added', 'BooksByWeight', { timeOut: 3000 });
      });
    } else {

      this.router.navigate(['/login']);
      this.toastr.error('YOU NEED TO LOGIN TO SAVE WISHLIST', 'BooksByWeight', { timeOut: 3000 });
    }

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

  deletePro(WishlistId) {
    this.wish.deleteProduct(WishlistId).subscribe(res => {

      this.toastr.success('Product Has Been Remove', 'BooksByWeight', { timeOut: 2000 });
    
      console.log(this.fav);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

}
