//Main Goal -> Give Shape to object
interface Chai{
    Flavour: string,
    Price: number,
    Milk?: boolean
}

const Masala: Chai = {
    Flavour: "Masala",
    Price: 30
}

interface One{
    Flavour: string,
    Price: number,
    Milk?: boolean
}

const Two: One = {
    Flavour:"Masala",
    Price:30
}

interface Shop {
    readonly id: number
    Name: string
}

const S: Shop = {
    id: 1,
    Name: "Mohd Ayaan"
}

interface Shopping{
    readonly id: number,
    Name: string
}
const ShoppingTwo: Shopping={
    id: 1,
    Name: "MMMM"
}

interface DiscountCalculator{
    (Price: number): number
}

const Apply50: DiscountCalculator = (P) => P*0.5

interface TeaMachine{
    Start(): void;
    Stop(): void
}

const Machine: TeaMachine = {
    Start(){
        console.log("Start");
    },
    Stop(){
        console.log("Stop");
    }
}

interface TeaRating {
    [Flavour:string]:number
}

const Ratings: TeaRating = {
    Masala: "4.5",//Wrong Way
    Ginger: 4.5
}

interface User {
    Name: string
}
interface User{
    Age: number
}

const U: User = {
    Name: "Ayaan",
    Age: 22
}
interface A{a: string}
interface B{b: string}

interface C extends A , B {}

//Generics ->Templates, Make Code Reuseable

function WrapInArray<T>(Item: T): T[]{
    return [Item]
}

WrapInArray("Masala")
WrapInArray(42)
WrapInArray({flavour:"Ginger"})

function Pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]//you can't return a before b , 
}

Pair("Masala",21)
Pair("Masalaa",{flavour:"Ginger"})

interface Box<T>{
    content: T
}

const NumberBox: Box<number> = {content: 10}
const NumberBoxCup: Box<string> = {content: "10"}

interface ApiPromise<T>{
    status: number,
    Data: T
}

const Res: ApiPromise<{Flavour:string}>={
    status: 200,
    Data: {Flavour:"Ginger"}
}