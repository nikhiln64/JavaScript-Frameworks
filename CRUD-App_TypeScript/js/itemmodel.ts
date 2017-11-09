class Item{
    private _id:number;
    private name:string;
    private desc:string;
    private price:any;
    private image:any;
    private color:any;
    private markForDelete:any;
   
    constructor(id?, name?, desc?, price?, image?, color?){
        this._id = id;
        this.name = name ;
        this.desc = desc;
        this.price = price;
        this.image = image;
        this.color = color;
        this.markForDelete = false;
    }


}

