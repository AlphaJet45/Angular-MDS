import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  deleteElmt(i) {
    this.products.splice(i, 1);
  }

}
