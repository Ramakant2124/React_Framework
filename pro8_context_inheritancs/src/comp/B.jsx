import { useContext } from "react"
import { MyContext } from "../App"
function B(){
    const name =useContext(MyContext)
    return(
    <div className="container mt-3 p-3 border">
        <h3>--B--</h3>
        <p>Name: {name}</p>
        </div>
    )
}

export default B