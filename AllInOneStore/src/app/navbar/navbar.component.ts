import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productName: string;
  constructor(private myService: ProductService){
    this.myService = myService;
  }
  ngOnInit() {
  }

  loadMobiles() {
    this.productName = 'Mobile Store';
    this.myService.loadMobiles();
  }

  loadShirts() {
    this.productName = 'Appearals Store';
    this.myService.loadShirts();
  }

  loadShoes() {
    this.productName = 'Footware Store';
    this.myService.loadShoes();
  }

}
