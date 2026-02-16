const Chai = {
    name: "Masala Chai",
    Price: 20,
    IsHotTake: true
}
//{
  //  name: string;
   // Price: number;
    //isHot: boolean;
//}

let tea:{
    name:string;
    price:number;
    isHot:boolean
}
tea={
    name:"Ginger Tea",
    price:25,
    isHot:true
}
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const AdrakChai: Tea = {
    name:"Masala Chai",
    price:30,
    ingredients:["ginger","teaLeaves"]
}

type cup = {size:string};
let SmallCup: cup = {size:"200ml"}
let bigCup = {size:"500ml", material:"steel"}//we add extra value but it dont show an error bcz we can add extra value thats it
SmallCup = bigCup

type Brew = {brewTime:number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee;

type User = {
    username:string;
    password:string
}
const u:User = {
    username:"ChaiCode",
    password:"123"
}

//Data Types Splits out
type Items= {name:string, quantity:number};
type Address= {street:string, pin:number};
type Order = {
    id:string,
    items:Items[],
    address:Address
}

type chai = {
    name:string;
    price:number;
    isHot:boolean;
}
const updateChai = (updates: Partial<chai>) =>{
    console.log("Updating Chai With", updates);
}
updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type chaiOrder = {
    name?:string;
    quantity?:number
}
const PlaceOrder = (order: Required<chaiOrder>) =>{
    console.log(order);
}
PlaceOrder({
    name:"MasalaChai",
    quantity:2
})

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}
type BasicChaiInfo = Pick<Chai,"name"|"price">

const ChaiInfo : BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30,

}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    Secretingredients: string[]
};
type publicChai = Omit<ChaiNew,"Secretingredients">
