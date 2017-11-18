import { Component} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../productservice';

@Component({
  selector: 'app-data-template',
  templateUrl: './data-template.component.html',
  styleUrls: ['./data-template.component.css']
})

export class DataTemplateComponent  {
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
