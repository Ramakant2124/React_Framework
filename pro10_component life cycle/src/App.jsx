import { useState, useEffect } from "react";
function App(){
  const [count, setCount] = useState(0)

  // mounting
  //useEffect ( ()=>{alert ("Welcome..!")} , [])

  //mounting + Re-rederning
 // useEffect ( ()=>{alert(" Counter Reset..!")} ,[count])

  // every renderning 
  useEffect ( ()=>{alert("hello..!")})

return(
<div>
  <h3>--Counter--</h3>
  <h3> Count : {count} </h3>
  <button onClick={()=>{setCount(count+1)}}>++</button>
</div>
)
}

export default App

// moubting
//useEffect (setUpFunction , deapArray)
// array - [] -empty - mounting
// arrya [deap ]- mounting + re- rendering
