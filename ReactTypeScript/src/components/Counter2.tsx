import { useState } from "react";

export function Card2(){
    const [state,setState] = useState<number>(0);
    return(
        <div>
            <p>{state}</p>
            <button onClick={(e)=>setState(state+1)}>Addd</button>
        </div>
    )
}