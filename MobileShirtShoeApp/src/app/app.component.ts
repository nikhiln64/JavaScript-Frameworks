import { Component } from '@angular/core';
import { ProductService } from './productservice';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'All In One Store';
}
