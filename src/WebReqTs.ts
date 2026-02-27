import axios = require("axios");
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
}
