

function App() {

  // event handler
  function welcomefun(){
    alert("Wel-Come..!")
  }

  function changeClrToRed(){
    const para1 = document.getElementById("para1")
    console.log(para1)
    para1.style.color="red"
  }
    function changeClrToBlue(){
    const para1 = document.getElementById("para1")
    console.log(para1)
    para1.style.color="Blue"
  }
  return (

      <div>
       <h3>--App--</h3>
       <button onClick={changeClrToBlue}>blue</button>
       <button onClick={changeClrToRed}>red</button>
       <p id="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex rem, omnis voluptatum fugiat sed laborum mollitia
         quo corporis molestiae fugit 
        blanditiis repudiandae minus nam, eos quidem, praesentium eius eum?</p>
        <button onClick={welcomefun}>click</button>
      </div>
    

  )
}

export default App
