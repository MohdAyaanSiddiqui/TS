
//1
//GetArrowing
function GetArrowing(kind: string | number){
    if(typeof kind === "string"){
        //Here , Kind  is narrowing to string
        return `Make ${kind} Tea`//TypeScript know kind is a string
    }
    //Here Kind is narrow to number(since its not a number)
    return `Tea Order: ${kind}`;
}

function ServeTea(msg?:string){//msg can be string and undefined
    if(msg){
        //`msg` is narrowed to string 
        return `Serving ${msg}`;
    }
    //msg is undefined here
    return `Serving Default Tea ${msg}`//this will show undefined but TS allows it
}

function OrderTea(size:"small" | "medium" | "large"){
    if(size === "small"){
        return `Small Chai`
    }
    if(size === "medium" || size === "large"){
        return `Make Extra Chai`;
    }
    return `Chai order ${size}`
}

class KulhadChai{
    serve(){
        return `Serve A Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Server A Cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        //Chai Is Narrows to kulhadChai
        return chai.serve();// Access KulhadChai -speicified method
    }
    //chai is narrows to 'Cutting
}

type TeaOrder = {type:string,sugar:number};
function isChaiOrder(obj: any): obj is TeaOrder{//Type Predicted
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}
function serveOrder(item:TeaOrder | string){
    if(isChaiOrder(item)){
        //Item is narrows to 'TeaOrder'
        return `Serving ${item.type} Chai With ${item.sugar}`
    }
    return `Serving Custom Tea ${item}`
}
type MasalaChai = {type:"MasalaChai"; spiceLevel:number}
type ElaichiChai = {type:"ElaichiChai", amount:number}
type GingerChai = {type:"GingerChai",aroma:number}

type chai = MasalaChai | ElaichiChai | GingerChai;

function MakeChai(order:chai){
    switch(order.type){
        case "MasalaChai":
            return `Masala Chai`
            break;
        case "ElaichiChai":
            return `Elaichi Chai`
            break;
        case "GingerChai":
            return `Ginger Chai`
            break;           
    }
}
function brew(order:MasalaChai | GingerChai){
    if("spiceLevel" in order){
        //order is narrow to masalachai
    }
}
function isStringArray(arr:unknown): arr is string[]{
    //we need to check if `arr` is an array and all elements are number
}