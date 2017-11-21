export class Product{
    id:number;
    name:string;
    price:number;
    url:string;

    constructor(id, name, price, url) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.url = url;
    }
}