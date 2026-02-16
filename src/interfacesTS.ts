type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}
function MakeChai(order: ChaiOrder){
    console.log(order);
}

function ServeChai(order: ChaiOrder){
    console.log(order);
}

interface TeaRecipe  {
    water:number;
    milk:number
}
//class MasalaChai implements TeaRecipe{
  //  water = 100;
    //milk = 50;
//}

interface CupSize {
    size: "Small" | "Large" 
}
class Chai implements CupSize{
    size: "Small" | "Large"="Large";
}

type response = {
    ok:true 
} |
{
    ok: false
}
//class MyRes implements Response {
  //  ok: boolean = true;
//}

type TeaType = "masala" | "ginger" | "Lemon"//Literals Type
function OrderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {TeaLeaves: number}
type Extra = {masala: number}
type MasalaChai = BaseChai & Extra;
const Cup: MasalaChai = {
    TeaLeaves:2,
    masala:1,
}

type User = {
    username: string
    bio?: string 
}

const U1: User = {username: "Ayaan"}

const U2: User = {username: "Ayaan", bio: "Ayaan.1o"}

type config = {
    readonly appName: string,
    version : number
}

const cfg: config = {
    appName: "Master",
    version:1
}

//cfg.appName = "Master2"//it gives error we cannot change value after assigning