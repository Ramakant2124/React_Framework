import './CSS/style.css'
function App() {
  return (
    
      <div>
        {/* inline css  */}
        <h2 style={{color:'red',fontFamily:'cursive',textAlign:'center'}}>--App--</h2>
        <p style={{border:'2px solid blue',padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem rerum inventore incidunt ipsum quia
           aliquid voluptatum illum autem! Error,
           commodi. Tempora labore voluptatum non architecto aut? Dolor, aperiam sint!</p>

               {/* External  css  */}
        <h2 >--App--</h2>
        <p className="abc" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem rerum inventore incidunt ipsum quia
           aliquid voluptatum illum autem! Error,
           commodi. Tempora labore voluptatum non architecto aut? Dolor, aperiam sint!</p>

                      {/* Bootsrap  */}
        <h3 className='text-center text-primary' >--App--</h3>
        <p className='border border-danger p-3'>good morning</p>
        <p className='border border-danger p-3'>hello world</p>
      </div>
  
  )
}

export default App
