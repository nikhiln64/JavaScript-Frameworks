import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../productservice';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  error: string;
  productArray: Product[];
  productSub: any;
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  call() {
    this.productService.loadMobiles();
    this.ngOnInit();
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
