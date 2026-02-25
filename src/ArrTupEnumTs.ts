const ChaiFlavours: string[] = ["Masala","Adrak"]
const ChaiPrice: number[] = [10,20]
const rating: Array<number> = [4.5,5.0] 

type Chai = {
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
]

//Read Arrays? -> Only Define not modified
const Cities: readonly string[] = ["Delhi","Jaipur"]
// Cities.push("Pune")

//Multi Dimensional Array

const Table: number[][] = [
    [1,2,3],
    [4,5,6]
]

let chaiTuple: [string, number];
chaiTuple = ["Masala",20]
//chaiTuple = [20,"Masala"]

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

const Size = CupSize.LARGE
enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function MakeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

MakeChai(ChaiType.GINGER)
//MakeChai("masala")

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