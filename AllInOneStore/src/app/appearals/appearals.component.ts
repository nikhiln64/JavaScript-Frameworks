import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../productservice';


@Component({
  selector: 'app-appearals',
  templateUrl: './appearals.component.html',
  styleUrls: ['./appearals.component.css']
})
export class AppearalsComponent implements OnInit {
  error: string;
  productArray: Product[];
  productSub: any;
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.productSub = this.productService.products$.subscribe(
        products => this.productArray = products,
        err => this.error = err
    );
    console.log(this.productSub);
  }

  ngOnDestroy() { this.productSub.unsubscribe(); }

}
