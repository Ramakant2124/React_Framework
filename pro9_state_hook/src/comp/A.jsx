import { useState} from "react"

function A(){
    const [num, setNum] = useState(166)
    // event handler
    function inc(){
        setNum(num + 1)
    }
    console.log("A rendered..!")
    return (
    <div className='container mt-3 p-3 border border-dark'>
        <h3>--A--</h3>
        <p> Num: {num} </p>
        <button onClick={inc} >inc</button>
        </div>
    )
}    
export default A