import React, { useState } from "react";

/*import React, { useState } from "react"

interface OrderFormProps{
    onSubmit(order:{name:string;Cups:number}): void
}
export function OrderForm({onSubmit}:OrderFormProps){
const [name,setName] = useState<string>("Masala");
const [cups, setCups] = useState<number>(1);
function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    onSubmit({name,Cups})
}
    return(
        <form onSubmit={handleSubmit}>
        <label>Tea Name</label>
            <input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />
        <label>Cups</label>
            <input type="Number" value={cups} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCups(Number(e.target.value))} />
                <button type="submit">Place Order</button>
        </form>
    )
}
    */

interface OrderFormProps{
    onSubmit(order:{name:string,price:number}): void
}
export  function OrderForm({onSubmit}:OrderFormProps){
    const [name,setName] =useState<string>("Ginger");
    const [cups,setCups] =useState<number>(1);
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,Cups})
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Tea Name</label>
            <input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
            <label>Cups</label>
            <input type="number" value={cups} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value))} />    
        </form>
    )
}