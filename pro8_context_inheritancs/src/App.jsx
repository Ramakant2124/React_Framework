import A from "./comp/A"
import { createContext } from "react"

const MyContext = createContext()

function App(){
  const name = "Ramakant"
  return(
  <div className="container mt-3 p-3 border">
    <h3>--App--</h3>
    <p>Name: {name}</p>
    <MyContext value={ name} >
      <A/> 
    </MyContext>
    </div>
  )
}
export default App

export {MyContext}