import { httpOptions } from './../models/api.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_LIVE,  } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})

export class WishlistService {
  

  constructor(private http: HttpClient) { }
  
public getwish():Observable<any>{

    return this.http.get<any[]>(`${API_LIVE}`+"/wishlist/ByUser",httpOptions);

}

}
