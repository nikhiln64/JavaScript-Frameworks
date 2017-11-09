const itemOperations = {
    itemArray:[],
    autoObject :autoGenNumber(),
    id:0,
    getId(){
        if(!this.id){
            return 1001;
        }
          return this.id ; 
    },
    addItem(id, name, desc, price, image, color){
        this.id = this.autoObject.next().value;
          var itemObject= new Item(this.id,name,desc,price,image,color);  
          this.itemArray.push(itemObject);
    },
        searchItemById(id){
              return this.itemArray.filter((itemObject)=>itemObject.id==id)[0];  
        },
         markRecords(id){
            var itemObject =  this.searchItemById(id);
            itemObject.markForDelete = !itemObject.markForDelete;
         },
        deletedCount(){
                return this.itemArray.filter((itemObject)=>itemObject.markForDelete).length;
        },
        deleteMarkRecords(){
            this.itemArray = this.itemArray.filter((itemObject)=>!itemObject.markForDelete);
        }


}