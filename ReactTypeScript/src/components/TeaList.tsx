/*import type {Tea} from "../Types"
import { TeaCard } from "./TeaCard"
interface TeaListProp{
    items: Tea[]
}
export function TeaList({items}: TeaListProp){
    return(
        <div>
            {items.map((tea)=>(
                <TeaCard
                key={tea.id}
                name={tea.name}
                price={tea.price}
                isSpecial={tea.price> 30}
                />
            ))}
        </div>
    )
}
 export default TeaList
*/

import { isAxiosError } from "axios";
import type { Tea } from "../Types";
import { TeaCard } from "./TeaCard";
interface TeaListProp{
    items: Tea[]
}
export function TeaList({items}:TeaListProp){
    return(
        <div>
            {items.map((item)=>(
                <TeaCard 
                key={item.id}
                name={item.name}
                price={item.price}
                isSpecial={item.price > 50}
                />
            ))}
        </div>
    )
}