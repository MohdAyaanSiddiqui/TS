let response:any = "42"

//Forcefull type insertion
let numericalString:number  = (response as string).length

type book = {
    name: string
}
 let bookString = '{"name":"who moved my cheese"}';
 let bookObject = JSON.parse(bookString) as book

 const inputElement = document.getElementById("username") as HTMLInputElement

let value: any;
value = "chai";
value = [1,2,3];
value = 2.5;
value.toUpperCase();

let newvalue: unknown;
newvalue = "chai";
newvalue = [1,2,3];
newvalue = 2.5;

if(typeof newvalue === "string"){
    newvalue.toUpperCase();
}

try{
    
}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
}
const data:unknown = "Chai Aur Code"
const StrData:string  = data as string

//Type Never
type Role = "Admin" | "User"
function RediredtToBasedOnRole(role:Role){
    if(role === "Admin"){
        console.log("Redirecting to admin Dashboard");
        return;
    }
    if(role === "User"){
        console.log("Redirecting to User Dashboard");
        return;
    }
    role;
}