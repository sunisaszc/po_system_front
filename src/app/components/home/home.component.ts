import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';


import { ProductService } from '../../services/product.service';
import { Products } from '../../models/products/product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private localSt: LocalStorageService, private router: Router) { }
  
  private productList: Products

  ngOnInit() {
    this.getAllProduct()
  }

  getAllProduct() {
    this.productService.getUsers().subscribe((response) => {
      if (response != null) {
        this.productList = response
        this.router.navigate(['/']);
      } else {
        console.log("Failed");
      }
    })
    return false;
  }
}
