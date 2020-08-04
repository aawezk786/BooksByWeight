import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { FilterService } from 'src/app/services/filter.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;

  @Input() addedToWishlist: boolean;

 


  wish$: any = [];
  wid: any = [];
  size: any = {};
  Error = false;
  message: any;
  length: any;
  wid1: any = [];
  pid: any = [];
  pid1: any = [];
w:any = [];
  books: any = [];

  constructor(
    private toastr: ToastrService,
    private CatService: CategoryService,
    private router: Router,
    private newService: BooksService,
    private route: ActivatedRoute,
    private filter: FilterService,
    private wish: WishlistService
  ) { }

  ngOnInit() {
    
  
  }


  productHome(_id) {
    window.open('details/' + _id);
  }



  addWish(_id) {
    if (localStorage.getItem('User')) {
      this.wish.postProduct(_id).subscribe(
        () => {
          this.toastr.success('Product Successfully Added', 'BooksByWeight', {
            timeOut: 3000,
          });

          this.addedToWishlist = true;
          console.log(this.addedToWishlist)
        },
        (err) => {
          this.toastr.warning('Product already Added', 'BooksByWeight', {
            timeOut: 3000,
          });
        }
      );
    } else {
      this.router.navigate(['/login']);
      this.toastr.error('YOU NEED TO LOGIN TO SAVE WISHLIST', 'BooksByWeight', {
        timeOut: 3000,
      });
    }
  }

  deletePro(_id) {
    this.wish.deleteProduct(_id).subscribe(() => {
      this.toastr.error('Product Has Been Remove', 'BooksByWeight', {
        timeOut: 2000,
      });
      this.addedToWishlist = false;
      console.log(this.addedToWishlist)

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  
  
}
