import { HttpHeaders } from '@angular/common/http'

export const API_URL = "http://localhost:5000/api"
export const API_LIVE = "https://bbw-backend.herokuapp.com/api"

const token = localStorage.getItem('User');
var token1 = token.slice(1, -1);
console.log(token1);
export const httpOptions = {
  
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer' + token1

    })
  }


  

