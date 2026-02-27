/*import axios = require("axios");
import type {AxiosResponse} from "axios";

interface Todo{
    userId: number;
    id: number
    title: string,
    completed: boolean
}

const FetchData = async() =>{
    try{
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log("Todo", response.statusText);
    }catch(error: any){
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}*/
/*
import axios = require("axios");
import type {AxiosResponse} from "axios"

interface Todo{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
const FetchData = async() =>{
    try{
        const response: AxiosResponse<Todo> =await axios.get("");
        console.log("Todo",response.statusText);
    }catch(error: any){
        if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
*/
/*
import axios = require("axios");
import type {AxiosResponse} from "axios"

interface Todos{
    userId:number,
    id:number,
    name:string,
    completed: boolean
}

const Fetch = async() =>{
    try{
        const response:AxiosResponse<Todos> = await axios.get("")
        console.log("Axios",response.statusText);
    }catch(error:any){
        if(axios.isAxiosError(error)){
            console.log("Error",error.message);
            if(error.response){
                console.log(error.response.data);
            }
        }
    }
}
*/
import axios = require("axios")
import type {AxiosResponse} from "axios"
interface Todo{
    UserId:number,
    Id:number,
    Name:string,
    Completed:boolean
}
const FetchUsingAxios = async () =>{
    try{
        const response:AxiosResponse<Todo> = await axios.get("");
        console.log("Axios", response.statusText);
    }catch(error: any){
        if(axios.isAxiosError(error)){
            console.log("Error",error.message);
            if(error.response){
                console.log("Error Using Response",error.response.data);
            }
        }
    }
}