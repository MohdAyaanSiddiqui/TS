/*function MakeChai(type:string, cups:number){
    console.log(`Making ${cups} Cups Of ${type}`);
}
MakeChai("Masala Chai",2);

function getChaiPrice():number {
    return 25;    
}

function MakeOrder(order: string){
    if(!order) return null;
    return order;
}

//Logger Functions

function LogChai(): void{
    console.log("Chai Is Ready");
}

//function OrderChai(type?: string){
  //  console.log("Order Chai");
//}
function OrderChai(type : string = "Masala"){
}

function CreateChai(order: {
    type: string;
    sugar: number;
    size: "Small" | "Large"
}): number{
    return 4;
    
}
*/    

function MakeChai(Order:string, Cup:number){
    console.log(`${Cup} of ${Order}`);
}
MakeChai("Masala Chai",25);

function getChai():number{
    return 25;
}

function makeOrder(order:string){
    if(!order)return null;
    return order;
}
function OrderChai(type?: string){
    console.log("Order Chai");
}
function OrderChaii(type: string = "Masala"){}

function OrderChhai(order:{
    type: string,
    sugar: number,
    size: "Small" | "Large"
}):number{
    return 4;
}
