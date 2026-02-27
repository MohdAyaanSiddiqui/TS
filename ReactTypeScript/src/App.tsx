import './App.css'
import { Counter } from './components/Counter.tsx'
import { TeaCard } from './components/TeaCard.tsx'
import TeaList from './components/TeaList.tsx'

import type { Tea } from './Types.ts'
const menu:Tea[]=[
  {id:1,name:"Masala",price:30},
  {id:2,name:"Ginger",price:40},

]
function App() {
  return (
    <>
    <div>
      <h1>Vite + React/TypeScript</h1>
      <TeaCard
      name="HeadPhones"
      price={5000}
      />
       <TeaCard
      name="Iphone"
      price={115000}
      />
      <div>
        <Counter/>
      </div>
      <div>
        <TeaList
        items={menu}
        />
      </div>
    </div>
    </>
  )
}

export default App
