/*
interface Todo{
    userId: number;
    id: number
    title: string,
    completed: boolean
}
const FetchData = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok){
            throw new Error(` HTTP ERROR ${response.status}`)
        }
        const data: Todo = await response.json()
        
    }catch(error: any){

    }
}
*/

import axios = require("axios");
import type {AxiosResponse} from "axios"
interface TodoList{
    UserId:number,
    Id:number,
    Name:string,
    Completed:boolean
}
const FetchData = async () =>{
    try{
        const response = await fetch("");
        if(!response.ok){
        throw new Error(`Error ${response.status}`)
        }
        const data: TodoList = await response.json();
    }catch(error : any){
        if(axios.isAxiosError(error)){
            console.log("Error In Fetching Data",error.message);
            if(error.response){
                console.log(error.response.data);
            }
        }
    }
}