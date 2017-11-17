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
  constructor(private productService: ProductService) {
  }
  

  loadMobiles(){
    let promise  = this.productService.fetchMobiles();
    promise.then(productArr => {
        return this.productArray = productArr;
      }).catch((err) => {
       this.error = err;
      });
  }

  loadShirts() {
    let promise  = this.productService.fetchShirts();
    promise.then(productArr => {
         return this.productArray = productArr;
      }).catch((err) => {
       this.error = err;
      });
  }

  loadShoes() {
    let promise  = this.productService.fetchShoes();
    promise.then(productArr => {
      return  this.productArray = productArr;
      }).catch((err) => {
       this.error = err;
      });
  }
}
