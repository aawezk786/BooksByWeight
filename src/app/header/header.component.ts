import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as jwt_decode from 'jwt-decode';
import { WishlistService } from '../services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
session = false;
UserData : any;
  book$: any;
  length: any;
  constructor(
    private wish: WishlistService
    ) { }

  ngOnInit(): void {

    this.wish.getwish().subscribe(data => {
      this.book$ = data;
      this.length = data.books.length;
     
    })


    this.jquery_code();
    this.isLogin();
  }
jquery_code(){
  $(document).ready(function(){

    // $(".dropdown").hover(function(){

    //     var dropdownMenu = $(this).children(".dropdown-menu");

    //     if(dropdownMenu.is(":visible")){

    //         dropdownMenu.parent().toggleClass("open");
            

    //     }

    // });


});
}
isLogin(){

  var token = localStorage.getItem('User');
  if(token){
    var decode = jwt_decode(token);
    this.UserData = decode;
    this.session = true;
  }
 
  
  
}

 openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

 closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

}
