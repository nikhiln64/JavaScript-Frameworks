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
  productName: string;
  constructor(private myService: ProductService){
    this.myService = myService;
  }

  ngOnInit() {
  }

  loadMobiles() {
    this.productName = "Mobile Store";
    this.myService.loadMobiles();
  }

  loadShirts() {
    this.productName = "Appearals Store";
    this.myService.loadShirts();
  }

  loadShoes() {
    this.productName = "Footware Store";
    this.myService.loadShoes();
  }
}
