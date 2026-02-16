//1 Object Literal with implicit typing
const Chai = {
    name:"Masala Chai",
    Price: 20,
    isHot: true

}

//2 Explicit Object Type Annotation
let tea:{
    name:string,
    price:number,
    isHot:boolean
}
tea={
    name:"Masala Chai",
    price:20,
    isHot:true
}

//3 Type Allias With Arrays
type Tea = {
    name:string,
    price:number,
    ingreidients:string[]
}
const AdrakChai: Tea = {
    name:"Masala Chai",
    price:20,
    ingreidients:["Ginger","Lemon"]
}

//4 Structured Typing
type Cup = {size:string}
let SmallCup: Cup={size:"200ML"}
let BigCup = {size:"500ML", material:"steel"}
SmallCup = BigCup

//5 Structural Typing With Object
type Brew = {BrewTime:number}
const Coffee = {BrewTime:2,beans:"Arabica"};
const ChaiBrew:Brew = Coffee

//6 Name Type With Authentication
type User = {
    username:string,
    password:string
}
const u:User = {
    username:"MohdAyaan",
    password:"123"
}

//7 Splitting Into Smaller Piece
type Items = {name:string, quantity:number};
type Address = {street:string, pin:number}
type order ={
    id:string,
    items:Items[],
    address:Address
}

//8 Utility Types -> Partial
type Chais = {
    name:string,
    price:number,
    isHot:boolean
}
const UpdateChai = (updates:Partial<Chais>)=>{
    console.log("Updates Chai With",updates);
}
UpdateChai({price:25})
UpdateChai({isHot:false})
UpdateChai({name:"MasalaChai"})

//9 Utility Types -> Required<T>
type ChaiOrder = {
    name?:string,
    quantity?:number
}
const PlaceOrder = (order: Required<ChaiOrder>) =>{
    console.log(order);
} 
PlaceOrder({
    name:"MasalaChai",
    quantity:2
})
 //10 Utility Types -> Pick<T,K>
 type Chai = {
    name: string,
    price: number,
    isHot:boolean,
    ingredients: string[]
 }
type BasicChaiInfo = Pick<Chai, "name"|"price">

const ChaiInfo : BasicChaiInfo = {
    name: "Lemon Tea",
    price: 40
}

//11 Utility Type -> Omit
 type OmitChai = {
    name: string,
    price: number,
    isHot:boolean,
    ingredients: string[]
 }
type NewOmitChat = Omit<Chai, "ingredients">
