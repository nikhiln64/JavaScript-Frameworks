function* autoGenNumber(){
var num = 1000;
while(true){
num++;
var reset = yield num;
if(reset){
num = 1000;
}
}
} 