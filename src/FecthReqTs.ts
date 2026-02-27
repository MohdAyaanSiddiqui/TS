
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
