import 'rxjs/add/operator/toPromise';
import {Http, HttpModule} from '@angular/http';
import {Injectable} from '@angular/core';
import {Product} from './product';


@Injectable()
export class ProductService{
  http: Http;
  constructor(http: Http){
  this.http = http;
  console.log(http);
 }

fetchMobiles(): Promise<any[]>{
  let url = "https://raw.githubusercontent.com/nikhiln64/Other/master/JsonData/MobileData.json";
  return this.http.get(url).toPromise().then((response) => {
        return response.json().mobiles as Product[];
    }).catch(this.handleError);
}

fetchShirts(): Promise<Product[]> {
  let url = "https://raw.githubusercontent.com/nikhiln64/Other/master/JsonData/ShirtsData.json";

  return this.http.get(url).toPromise().then((response) => {
        return response.json().shirts as Product[];
    }).catch(this.handleError);
}

fetchShoes(): Promise<Product[]> {
  let url = "https://raw.githubusercontent.com/nikhiln64/Other/master/JsonData/ShoesData.json";

  return this.http.get(url).toPromise().then((response) => {
        return response.json().shoes as Product[];
    }).catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
