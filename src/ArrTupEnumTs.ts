//const ChaiFlavours: string[] = ["Masala","Adrak"]
//const ChaiPrice: number[] = [10,20]
//const rating: Array<number> = [4.5,5.0] 

/*type Chai = {
    name:string,
    price:number,
}

const Menu: Chai[] = [
    {
        name: "Masala",
        price: 30
    },
    {
        name: "Adrak",
        price: 25
    }
]*/

const ChaiFlavours: string[] = ["Masala","Adrak"];
const ChaiPrice: number[] = [10,20];
const rating: Array<number> = [4.5,5.0];

type Chai = {
    name:string
    price:number
}
const Menu: Chai[] = [
    {
        name:"Masala",
        price:25
    },{
        name:"Adrak",
        price:30
    }
]

//Read Arrays? -> Only Define not modified
const Cities: readonly string[] = ["Delhi","Jaipur"]
// Cities.push("Pune")
const CityName: readonly string[] = ["Lko"]
//not modified the string anymore
//Multi Dimensional Array
const CityNames: readonly string[] = ["Delhi"]
const Table: number[][] = [
    [1,2,3],
    [4,5,6]
]
const Table3: number[][] = [
    [1,2,3],
    [4,5,6]
]
const MDA: number[][] = [
    [1,2,3],
    [4,5,6]
]
let chaiTuple: [string, number];
chaiTuple = ["Masala",20]
//chaiTuple = [20,"Masala"]

let ChaiTupe: [string,number];
ChaiTupe = ["Masala",21];

let ChaiTuplee: [string, number];
ChaiTuplee = ["Masala",23]
let UserInfo: [string, number, boolean?]
UserInfo = [
    "Ayaan",
    22
]
UserInfo = [
    "Ayaan",
    22,
    true
] 
let UserInfoo: [string,number,boolean?]
UserInfoo = [
    "Ayaan",
    22
]
UserInfoo = [
    "Mohd",
    23,
    true
]
const Location: readonly [number, number] = [28.66, 32.22]

const ChaiItems: [name:string, price:number] = ["Masala",
    25
]

//Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
//enum CupSize{
  //  SMALLL,
   // MEDIUMM,
    //LARGEE
//}
const Size = CupSize.LARGE
enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}
enum CupSizee{
    Small,
    Medium, 
    Large
}
const Sizee = CupSizee.Large

enum ChaiType {
    MASALA = " Masala ",
    GINGER = " Ginger ",
}

function MakeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

MakeChai(ChaiType.GINGER)
//MakeChai("masala")

enum TeaType{
    Masala = "Masala",
    Ginger = "Ginger"
}

function MakeTea(type: TeaType){
    console.log(`Making ${type}`);
}

MakeTea(TeaType.Ginger);

enum RandomEnum{
    ID=1,
    NAME = "Chai"
}

const enum Sugar{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

//const s = Sugar.HIGH

let t: [string, number] = ["chai",10]
t.push("extra")

let T: [string, number] = ["Chai",20]
T.push("extra")