import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../productservice';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
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
