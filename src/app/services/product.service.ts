import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


import { Observable } from "rxjs/Observable";

import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class ProductService {


  constructor(private http: Http, private localSt: LocalStorageService) {
    

  }

  getUsers() {
    return this.http.get("http://localhost:3000/api/item/getitem")
    .map((res) => res.json());
  }

}