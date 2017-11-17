import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice';
import {Product} from '../product';
import {DataTemplateComponent} from '../data-template/data-template.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  error: string;
  productArray: Product[];

  constructor(private myService: ProductService){
    this.myService = myService;
  }

  dataTemplateComponent: DataTemplateComponent = new DataTemplateComponent(this.myService);

  ngOnInit() {
  }

 /*constructor(productService: ProductService) {
    this.productService = productService;
  }*/

  loadMobiles() {
   return this.dataTemplateComponent.loadMobiles();
  }

  loadShirts() {
    return this.dataTemplateComponent.loadShirts();
  }

  loadShoes() {
    return this.dataTemplateComponent.loadShoes();
  }


}
