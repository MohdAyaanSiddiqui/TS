/*class Chai{
    flavour: string;
   // price: number;

    //constructor(flavour: string, price: number){
      //  this.flavour = flavour;
       // this.price = price;
    //}
     constructor(flavour: string){
        this.flavour = flavour;
        console.log(this);
    }
}

const masalaChai = new Chai("Ginger",20)
masalaChai.flavour = "Masala"
*/

class Chaiii{
    Flavour:string;
    Price:number;

    constructor(flavour:string , price:number)
    {
        this.Flavour = flavour;
        console.log(this);
        this.Price = price;
        console.log(this);
         
    }
}
class Tea{
    WhichFlavour : string;
    PriceOfTheTea : number;

    constructor(F:string, P:number){
        this.WhichFlavour = F;
        console.log(this);
        this.PriceOfTheTea = P;
        console.log(this);
    }

}
const FinalTea = new Tea("Normal Tea",20);

const MasalaChai = new Chaiii("Ginger",20);
MasalaChai.Flavour ="Masala"
//Access Modifier
class Chai{
    public flavour: string = "Masala"

    private secretIngredients = "Cardamon"

    reveal(){
        return this.secretIngredients
    }

    
}
class ChaiiiTea{
    public flavours: string = "Masala"
    private SecretIngredients = "Cardamon"//Not Its Private

    reveal(){
        return this.SecretIngredients//Accepatble
    }
}
class Shop {
     protected ShopName = "Chai Corner"
}
class Branch extends Shop{
    getName(){
        return this.ShopName;
    }
}
class Shopp{
    protected Shop = "Tea Corner"
}
class Shoppp extends Shopp{
    getShop(){
        return this.Shop
    }
}

class ShopName {
    protected Shop = "TeaCorner"
}
class Branchh extends ShopName{
    getName(){
        return this.Shop
    }
}
class ShopN {
    protected Shopp = "Tea"
}
class Branchhhh extends ShopN{
    getName(){
        return this.Shopp
    }
}
class Wallet{
    #balance = 100;

    getBalance(){
        return this.#balance
    }
}

class Wallett{
    #balance = 100;
    getBalance(){
        return this.#balance
}}

const Wi = new Wallett();

const w = new Wallet();

class Cup{
    readonly Capacity: number = 250;
 
    constructor(capacity:number){
        this.Capacity = capacity
    }
}
class Cupp{
    readonly Capacity: number = 300

    constructor(capacityy:number){
        this.Capacity = capacityy
    }
} 
class Ccoe{
    readonly Cap: number = 300;
    constructor(cap: number){
        this.Cap = cap
    }
}
class Cop{
    readonly Capacity: number = 300

    constructor(capacity:number){
        this.Capacity = capacity
    }
    
}

class ModernChai{
    private _sugar = 2
    get sugar(){
        return this._sugar;
    }
    set sugar(value:number){
        if(value > 5 ) throw new Error("Too Sweet")
            this._sugar = value;
    }
}
class GetAndSet{
    private _sugar = 3;
    get Sugared(){
        return this._sugar
    }
    set Sugared(value:number){
        if(value>5) throw new Error("TOoo sewwt");
        this._sugar = value;
    }
}
class ModerenChai{
    private _suagr = 2;
    get sugar(){
        return this._suagr;
    }
    set sugar(value:number){
        if(value > 5) throw new Error("Too Sweet")
        this._suagr = value
    }
}
const C = new ModerenChai();
C.sugar = 4;
const c = new ModernChai();
c.sugar = 3



//Static method
class EkChai{
    static shopName = "ChaiCode Cafe"
    constructor(public flavour: string){}
}
console.log(EkChai.shopName);

class OneTea{
    static ShopName = "One Tea"
    constructor(public flavour: string){}
}
console.log(OneTea.ShopName);

abstract class Drink{
    abstract make(): void
}
class myChai extends Drink{
    make() {
        console.log("Brewing Chai");
    }
}

abstract class DrinkChai{
    abstract Makee: void;
}
class BrewingChai extends DrinkChai{
    Makee(){
        console.log("Brewing Chai");
    }
}

class OneChai{
    static ShopNamee ="ChaiC";
    constructor(public flovour:string){}
}
console.log(OneChai.ShopNamee);
abstract class Drinkk{
    abstract make(): void
}
class MyTeae extends Drinkk{
    make(){
        console.log("Brewing Chai") 
    }
}
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){}
    
    make(){
        this.heater.heat()
    }
}

class Heaters{
    Heat(){
        console.log("heating");
        
    }
}
class ChaiMakere{
    constructor(private heaters: Heaters){}

    Make(){
        this.heaters.Heat();
    }
}

class Heatersss{
    Heat(){
        console.log("Heating");
    }
}
class TeaMaker{
    constructor(private heatersss: Heatersss){}
    Makk(){
        this.heatersss.Heat();
    }
}

class Heaterssss{
    Heatss(){
        console.log("Heateringegblerjbggqeg");
    }
}
class TeaMaksefefefeer{
    constructor(private H:Heaterssss){}
    Makk(){
        this.H.Heatss();
    }
}
class ElectricHeater {
  heat() {
    console.log("Electric heating...");
  }
}
const maker = new ChaiMaker(new ElectricHeater());

class EC{
    HeatEC(){
        console.log("EC");
    }
}
const Makers = new (new EC())

interface IHeater{
    Heated():void
}
class GasHeater implements IHeater{
    Heated(){
        console.log("New Gas");
    }
}
class CHAiMKER{
    constructor(private Heater:IHeater){}

    Making(){
        this.Heater.Heated
    }
}

