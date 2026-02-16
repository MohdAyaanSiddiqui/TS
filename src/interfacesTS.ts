//1 Basic Tyep Definition And Function Usage
type ChaiOrder = {
    name:string,
    sugar:number,
    strong:boolean
}
function MakeChai(order: ChaiOrder){
    console.log(order);
}
function ServeChai(order: ChaiOrder){
    console.log(order);
}

//2 Interface Definition And Class Implementation
interface TeaRecipe{
    water:number,
    milk:number
}
class MasalaChai implements TeaRecipe{
    water= 50;
    milk= 25;
}
//3 Interface with union types and class implementation

interface CupSize{
    size: "Small" | "Large"
}
class Chai implements CupSize{
    size: "Small" | "Large"="Large";
}
//4 Union Type For responses
type response = {
    ok:true
} |
{
    ok:false
}

class MyRes implements response{
    ok:boolean = true;
}
//5 Literal Type and function
type TeaType = "Masala" | "Ginger" | "Lemon"
function OrderChai(t:TeaType){
    console.log(t);
}
//6 Intersection Types
type BaseChai = {TeaLeaves: number}
type Extra = {Masala: number}
type MasalaaChai = BaseChai & Extra;
const Cup: MasalaaChai = {
    TeaLeaves:2,
    Masala:2
}

//7 Optional Properties
type User  = {
    username : string
    bio?: string
}
const U1: User = {username:"Ayaan"}
const U2: User = {username:"Ayaan", bio:"Ayaan.ii"}

//8 ReadOnly Properties
type Config = {
    readonly appName:string,
    version: number
}
const cfg: Config = {
    appName: "Master",
    version: 1
}
cfg.appName = "Master2"