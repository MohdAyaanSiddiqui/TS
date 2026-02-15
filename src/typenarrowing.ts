function GetArrowing(kind: string | number){
    if(typeof kind === "string"){
        return `Make ${kind} Tea...`
    }
    return `Tea Order: ${kind}`;
}
function ServeTea(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving Default Tea ${msg}`;
}
function OrderTea(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small Tea`
    }
    if(size === 'medium' || size === "large"){
        return `make extra chai`
    }
    return `Chai Order ${size}`
}
class KulhadChai{
    serve(){
        return `Serving K Tea`;
    }
}
class Cutting{
    serve(){
        return `Serving C Tea`;
    }
}
function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}
type TeaOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrders{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrders | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} Chai With ${item.sugar}`
    }
    return `Serving Custom Tea ${item}`
}

type MasalaChai = {type:"MasalaChai", spiceLevel:number}
type GingerChai = {type:"GingerChai", amount:number}
type ElaichiChai = {type:"Elachi", aroma:number}

type chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: chai){
    switch (order.type) {
        case "MasalaChai":
            return `Masala Chai`
            break;
        case "Elachi":
            return `Elaichi Chai`
            break;
        case "GingerChai":
            return `Ginger Chai`
            break;            
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){

    }
}

function isStringArray(arr : unknown): arr is string[]{
    
}